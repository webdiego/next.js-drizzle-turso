import { Button } from "./ui/button";
import { addNoteAction } from "../app/actions/addNoteAction";
export default function Form() {
  return (
    <div className="bg-slate-200 p-2 rounded-lg ">
      <h1 className="text-base font-semibold leading-7 text-gray-900">
        Add Note
      </h1>
      <form action={addNoteAction}>
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
          required
        />
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="description"
          required
        />
        <Button type="submit" className="w-full mt-2">
          Add Note
        </Button>
      </form>
    </div>
  );
}
