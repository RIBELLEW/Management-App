import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";
export default function StandartField({ onStartAddProject }) {
  return (
    <div className="flex flex-col  w-2/3 py-20 items-center  mt-24 text-center">
      <img
        src={noProjectImg}
        alt="An emty task list"
        className="w-20 h-20 object-contain mx-auto"
      />
      <h1 className="text-xl font-bold text-stone-500 my-4">
        No project selected.
      </h1>
      <p className="text-stone-400 mb-6">
        Select a project or get started with a new one
      </p>
      <p>
        <Button children="Create new project" onClick={onStartAddProject} />
      </p>
    </div>
  );
}
