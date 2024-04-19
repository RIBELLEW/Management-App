import Tasks from "./Tasks.jsx";

export default function SelProjectPage({
  project,
  onDelProject,
  onAddTask,
  onDelTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("be-BY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-2/3 mt-16 ml-3 pl-10">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDel={onDelTask} tasks={tasks} />
    </div>
  );
}
