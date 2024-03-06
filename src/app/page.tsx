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
    <div className="max-w-md py-10 mx-4 sm:mx-auto ">
      <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] mt-24">
        Template Next.js + Drizzle + Turso + Shadcn
      </h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground ">
        It includes a simple CRUD app for notes using server actions.
      </p>
      {/* <div className="flex  items-center justify-center space-x-2 py-2">
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
      </div> */}
      <Form />
      <Notes notes={allNotes} />
    </div>
  );
}
