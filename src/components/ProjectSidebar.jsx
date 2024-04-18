import { list } from "postcss";
import Button from "./Button";
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selProjectId,
}) {
  return (
    <aside className="rounded-tr-xl mt-16 px-8 py-16 w-1/3  pb-80 bg-stone-900 md:w-72">
      <h2 className="text-2xl first:font-bold uppercase text-stone-100 mb-8 md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses =
            "w-full mb-2 text-left px-2 py-1 rounded-sm  hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selProjectId) {
            cssClasses += " bg-stone-700/50 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
