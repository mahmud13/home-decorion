import { Ratelimit } from "@upstash/ratelimit";
import redis from "../../utils/redis";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import Replicate from "replicate";
import vision from "@google-cloud/vision";

// Create a new ratelimiter, that allows 5 requests per 24 hours
const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(5, "1440 m"),
      analytics: true,
    })
  : undefined;
interface Vertex {
  x: number;
  y: number;
}
export interface Item {
  name: string;
  score: number;
  vertices: Vertex[];
}
export async function POST(request: Request) {
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

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY,
  });
  const { imageUrl } = await request.json();

  // POST request to Replicate to start the image restoration generation process
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "./rock-extension-404217-900289375b05.json",
  });
  if (client.objectLocalization) {
    const [result] = await client.objectLocalization(imageUrl);
    const objects = result.localizedObjectAnnotations?.map<Item>((obj) => {
      const vertices = obj.boundingPoly?.normalizedVertices || [];
      return {
        name: obj.name || "",
        score: obj.score || 0,
        vertices: vertices.map<Vertex>((v) => ({
          x: v.x || 0,
          y: v.y || 0,
        })),
      };
    });
    return NextResponse.json(objects);
  }

  return NextResponse.json("Failed to restore image");
}
