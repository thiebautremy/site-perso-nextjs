import type { NextApiRequest, NextApiResponse } from "next";
import achievementsData from "@/assets/achievementsData";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json({ data: achievementsData });
}
