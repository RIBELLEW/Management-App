import logo from "../assets/no-projects.png";
export default function StandartField() {
  return (
    <div className="flex flex-col  w-2/3 py-20 items-center gap-3 mt-24">
      <img src={logo} alt="Notes" className="w-20 h-20" />
      <h1 className="text-xl font-bold text-stone-600">No project selected.</h1>
      <p className="text-stone-500 pb-2">
        Select a project or get started with a new one
      </p>
      <button className="bg-stone-700 rounded-md px-4 py-2 text-stone-300 hover:bg-stone-800">
        Create new project
      </button>
    </div>
  );
}
