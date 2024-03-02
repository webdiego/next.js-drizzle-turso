import { db } from "../db/index";
import { notes } from "../db/schema/notes";
import { Button } from "@/components/ui/button";
import { addNoteAction } from "./actions/addNoteAction";
import Notes from "@/components/Notes";
import Form from "@/components/Form";
import Image from "next/image";
export default async function Home() {
  const allNotes = await db.select().from(notes).all();

  return (
    <div className="max-w-md mx-auto py-10">
      <div className="flex  items-center justify-center space-x-2 py-2">
        <Image
          src="/drizzle.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <Image
          src="/turso.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <Image
          src="/shadcn.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      <Form />
      <Notes notes={allNotes} />
    </div>
  );
}
