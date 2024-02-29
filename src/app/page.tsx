import { db } from "../db/index";
import { notes } from "../db/schema/notes";
import { Button } from "@/components/ui/button";
import { addNoteAction } from "./actions/addNoteAction";

export default async function Home() {
  const allNotes = await db.select().from(notes).all();

  return (
    <div>
      <h1>Notes:</h1>
      <div>
        {allNotes &&
          allNotes.map((note) => (
            <div key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>

              <p>{note.created_at}</p>
            </div>
          ))}
        <form action={addNoteAction}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />

          <Button type="submit" variant="outline">
            Button
          </Button>
        </form>
      </div>
    </div>
  );
}
