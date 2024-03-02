"use client";
import { Button } from "./ui/button";
import { addNoteAction } from "../app/actions/addNoteAction";
import { useRef } from "react";
export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const onSubmitHandler = (formData: FormData) => {
    addNoteAction(formData);
    ref.current?.reset();
  };
  return (
    <div className="bg-slate-200 p-2 rounded-lg ">
      <h1 className="text-base font-semibold leading-7 text-gray-900">
        Add Note
      </h1>
      <form action={onSubmitHandler} ref={ref}>
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="title"
        />
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="content"
        >
          Content
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="content"
        />
        <Button type="submit" className="w-full mt-2 ">
          Add Note
        </Button>
      </form>
    </div>
  );
}
