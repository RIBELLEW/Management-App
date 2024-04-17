import Input from "./Input.jsx";
export default function NewProject() {
  return (
    <div className="w-3/5 mt-20 py-32 px-20">
      <menu className="flex flex-wrap pr-20 justify-end gap-5 mb-4 items-center">
        <li>
          <button className="rounded-md px-4 py-2 text-stone-950 hover:text-stone-600 hover:bg-stone-200">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-stone-900 rounded-md px-4 py-2 text-stone-200 hover:bg-stone-700 hover:text-stone-50">
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col px-20 gap-8 justify-end">
        <Input label="Title" type="text" />
        <Input label="Description" textarea />
        <Input label="Due date" type="date" />
      </div>
    </div>
  );
}
