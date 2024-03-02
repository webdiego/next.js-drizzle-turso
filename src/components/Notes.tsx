import React from "react";
import DeleteForm from "./DeleteForm";
type NoteProps = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export default function Notes({ notes }: { notes: NoteProps[] }) {
  return (
    <div className="space-y-2 mt-2">
      {notes &&
        notes.map((note) => (
          <div key={note.id} className="bg-slate-100 rounded-lg p-2">
            <div className="flex space-x-3">
              <h1>Notes:</h1>
              <h2>{note.title}</h2>
            </div>
            <div className="flex space-x-3">
              <h1>Content</h1>
              <p>{note.description}</p>
            </div>
            <div className="flex space-x-3">
              <h1>Created at</h1>
              <p>{note.created_at}</p>
            </div>

            <DeleteForm {...{ note }} />
          </div>
        ))}
    </div>
  );
}
