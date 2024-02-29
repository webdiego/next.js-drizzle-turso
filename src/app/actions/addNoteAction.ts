import { db } from "@/db/index";
import { notes } from "@/db/schema/notes";

export async function addNoteAction(formData: FormData) {
  "use server";

  const rawFormData = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
  };

  const newNote = await db.insert(notes).values(rawFormData);

  return newNote;
}
