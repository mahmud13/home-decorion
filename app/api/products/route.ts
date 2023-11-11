import { FurnitureItem, PrismaClient, type Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
export interface ProductFilter {
  type?: string;
  price?: number;
}

const getProducts = async (request: NextRequest) => {
  const prisma = new PrismaClient();
  const { filter } = await request.json();
  const where: Prisma.FurnitureItemWhereInput = {};

  if (filter.type) {
    where.type = {
      contains: filter.type,
    };
  }
  const products = await prisma.furnitureItem.findMany({
    where,
  });
  console.log(products);
  return NextResponse.json(products);
};
export { getProducts as POST };
