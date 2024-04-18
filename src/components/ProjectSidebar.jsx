import { list } from "postcss";
import Button from "./Button";
export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="rounded-tr-xl mt-16 px-8 py-16 w-1/3  pb-80 bg-stone-900 md:w-72">
      <h2 className="text-2xl first:font-bold uppercase text-stone-100 mb-8 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full mb-2 text-left px-2 py-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
