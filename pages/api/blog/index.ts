import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function andler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await prisma.contact.findMany();
  res.status(200).json(data);
}
