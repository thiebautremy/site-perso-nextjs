import type { NextApiRequest, NextApiResponse } from "next";
import articlesData from "@/assets/blogData";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json({ data: articlesData });
}
