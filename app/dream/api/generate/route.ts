import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import redis from "@utils/redis";
import { roomType, themeType } from "@utils/dropdownTypes";
export interface GeneratePostResponse {
restoredImageUrl: string;
}
// Create a new ratelimiter, that allows 5 requests per 24 hours
const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(5, "1440 m"),
      analytics: true,
    })
  : undefined;

interface RequestJson {
  imageUrl: string;
  theme: themeType;
  room: roomType;
}

export async function POST(request: NextRequest) {
  // Rate Limiter Code
  if (ratelimit) {
    const headersList = headers();
    const ipIdentifier = headersList.get("x-real-ip");

    const result = await ratelimit.limit(ipIdentifier ?? "");

    if (!result.success) {
      return new Response(
        "Too many uploads in 1 day. Please try again in a 24 hours.",
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": result.limit,
            "X-RateLimit-Remaining": result.remaining,
          } as any,
        }
      );
    }
  }

  const { imageUrl, theme, room }: RequestJson = await request.json();

  // POST request to Replicate to start the image restoration generation process
  let startResponse = await fetch(
    "http://california-a.tensordockmarketplace.com:20505/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `a ${theme.name.toLowerCase()}, ${room.name.toLowerCase()}, a variety of home decors, designer wall, realistic, 4k, interior, extremely detailed, cinematic photo, ultra-detailed, ultra-realistic`,
        negative_prompt:
          "(normal quality), (low quality), (worst quality), paintings, sketches,extra digit,fewer digits,cropped,worst quality",
        original_image: imageUrl,
        scale: 7.5,
        steps: 40,
        seed: Math.floor(Math.random() * (999999999 - 10000000 + 1)) + 10000000,
      }),
    }
  );

  let jsonStartResponse = await startResponse.json();

  let downloadId = jsonStartResponse?.download_id;

  // GET request to get the status of the image restoration process & return the result when it's ready
  if (!downloadId) {
    return NextResponse.json({ error: "No download Id" });
  }
  return NextResponse.json<GeneratePostResponse>({
    restoredImageUrl: `http://california-a.tensordockmarketplace.com:20505/download/${downloadId}`,
  });
}
