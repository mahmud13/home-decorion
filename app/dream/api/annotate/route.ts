import { Ratelimit } from '@upstash/ratelimit';
import redis from '../../utils/redis';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Replicate from 'replicate';
import vision from '@google-cloud/vision';

// Create a new ratelimiter, that allows 5 requests per 24 hours
const ratelimit = redis
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.fixedWindow(5, '1440 m'),
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
    const ipIdentifier = headersList.get('x-real-ip');

    const result = await ratelimit.limit(ipIdentifier ?? '');

    if (!result.success) {
      return new Response(
        'Too many uploads in 1 day. Please try again in a 24 hours.',
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': result.limit,
            'X-RateLimit-Remaining': result.remaining,
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
    credentials: {
      project_id: 'rock-extension-404217',
      client_email: 'homedecor@rock-extension-404217.iam.gserviceaccount.com',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCyJoietIUOhWAf\nvBiLPjSUKGjzxD7s8H66UwA0fPithlLVKZIH95/lZesPoAv2dehwt45im1eoWPke\n7Zt6fmupXDKkSNa2Oz1+kQy+HxQFdSfKG7KLHfj4iHpeDnP+T/GDDIfQ+TmHyk6r\n5vRzptkK9lgM1cimlIedmLly5LtmoWaDOIaDIYfkAZ2ddg3T4lQtQXk+A8QzOAK7\n+YlLneVn/78gLnY9tnPJCQYpiEFXCYxejbkmiBU1tVtVp9RjRCRZ3dtLGSySyTfl\nVAgAZ2iCdPNkWXLZi/ps7H04HTkhtycqD5O5CdJ9aFXHg3hVZSZUj2HJL3xDWZ+m\n6FN3fvVVAgMBAAECggEACDbc+M25DuIufE1yJ5rO1iqw1YCYfYNZ9zcUMiy1qLFM\ns3XPEnKkBZyimd4BfzPmQQBDCUqWtZ/4nf5LENBbICbXUkTmMDvgtNZ1AHUyuU0I\nGyUWIUeuBFkCpMCaL5aPERcBp4HpBFkF3J5HFOgTZ5J+nS+O/hio0ib0chbtidNW\nn8/KPT+bGsxwc2oOxm9y2bPIo6ulfIEydq50O1zYZXBMBHGxl5oVIC91u3EVjPE7\n9YQETXwGBFVvvNDO4Z0VZHUr+5E/oWjXZTi2/oTWMAoPwCkORZsSfAMSjt18ZroB\nVZClTeiC5Kbn6Bzf4l5N+ZPVCz95QmPqYVBmzlbO5wKBgQDiQWblA6pONsScOtAm\nFiw+fdkxzAuzYcfA45RoPwkXOIbWLCAOZnXkEJbshgJl/0tVWegTgGiX1jts3SQo\nlpiS0eFZOiuJdkZokzV6hPizKbWaWr4w3/QIAuqqzUtfpMHkMBdiMUsofJ27ekuT\nlqPo46vcN7vtT+8e2fYPNn/9hwKBgQDJkip3WRol6uTvcBMwHjaE9kaTQaf+u37U\nyGBdMxB77fvmZDQSwphAkoN5XOmyOYDU85CGjsi9WKHelEFV1SxPKo1r0mM/6KNx\nPMokcRjjDDoiY/ksCKTbzTvgD9vAwtQ+w0z2tDj70187vfPaIoyhSilKNAHeLCzy\nlYDrZNJNQwKBgQCgr3I0E3ZQNfVMPzi00+p4N0iZZSCqNTd4dihgIOSD6VFZqdza\nXUo8vstxD3uElNsbss5vizK9IxjxJ90WNl4FZ6lzhSyGY8l9W48PhIBcPbML/IY2\nj9bwGaIvy71MH+bT+JOi2P9XsakUDLbACqw+KfNUYwDEeZCJiKKIC1y64QKBgQCO\nM3mV/Nv/h/i+GhjPR2E65+reE+GKSYeuYTXqSg4E/91HqcU6vuFeHH537d5IB10l\n3jZFVxGy0oZPWdPF07+Qkfp26FNwUJSNXE9W6hqego+4l0K/l9GF5wGojkd/c3L8\nXBc9q+LPdUyn/te7OchwOLtsR8hRjmSfNm1eox/htQKBgQCzE3aDTpdG9bHuOB6w\n52Y+Z/ybzIdeKK2HOaqavQ6s6GG/pRKIovkNfqLaCqDIwdzQeKcb2EG/BlMkcuGc\n8E1CttuxU4nzT7a5UiwvOMf7PDr1F+hJ2u23V5fndBu+I/+Be8TgLb7zzCiVt6Sj\nKyqRFf19792Qq83u4qqVk1cXwQ==\n-----END PRIVATE KEY-----\n',
    },
  });
  if (client.objectLocalization) {
    const [result] = await client.objectLocalization(imageUrl);
    const objects = result.localizedObjectAnnotations?.map<Item>((obj) => {
      const vertices = obj.boundingPoly?.normalizedVertices || [];
      return {
        name: obj.name || '',
        score: obj.score || 0,
        vertices: vertices.map<Vertex>((v) => ({
          x: v.x || 0,
          y: v.y || 0,
        })),
      };
    });
    return NextResponse.json(objects);
  }

  return NextResponse.json('Failed to restore image');
}
