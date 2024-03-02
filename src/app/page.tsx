import { db } from "../db/index";
import { notes } from "../db/schema/notes";
import { Button } from "@/components/ui/button";
import { addNoteAction } from "./actions/addNoteAction";
import Notes from "@/components/Notes";
import Form from "@/components/Form";
export default async function Home() {
  const allNotes = await db.select().from(notes).all();

  return (
    <div className="max-w-sm mx-auto py-10">
      <Form />
      <Notes notes={allNotes} />
    </div>
  );
}
