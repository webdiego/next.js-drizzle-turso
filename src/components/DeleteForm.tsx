import React from "react";
import { deleteNoteAction } from "../app/actions/deleteNoteAction";
import { Button } from "./ui/button";

export default function DeleteForm({ note }: { note: any }) {
  const { id } = note;
  console.log("note", id);
  return (
    <form action={deleteNoteAction}>
      <input type="hidden" name="id" value={id} />

      <Button type="submit" variant="destructive">
        Delete
      </Button>
    </form>
  );
}
