import { db } from "@/db";
import { notes } from "@/db/schema/notes";
import { eq, and } from "drizzle-orm";
import { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export async function GET(req: Request) {
  const allNotes = await db.select().from(notes).all();

  return {
    status: 200,
    body: allNotes,
  };
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { title, description } = req.body;
  const newNote = await db.insert(notes).values({
    title,
    description,
  });

  return {
    status: 201,
    body: newNote,
  };
}
