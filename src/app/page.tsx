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
    <div className="relative flex items-center h-screen ">
      <div className="bg-pattern absolute top-0 left-0 w-full h-screen -z-10" />
      <div className="fixed top-0 left-0 w-screen h-screen">
        <Image src="/bg.webp" alt="background" quality="100" layout="fill" />
      </div>
      <div className="relative max-w-md py-10 px-6 mx-4 sm:mx-auto backdrop-blur-[1px] rounded-3xl">
        <div className="absolute top-0 left-0 w-full h-full -z-10 rounded-7xl opacity-50 " />
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] ">
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
    </div>
  );
}
