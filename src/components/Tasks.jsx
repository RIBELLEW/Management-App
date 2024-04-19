import { list } from "postcss";
import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDel }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold uppercase text-stone-700/90 mb-4">
        Tasks
      </h2>
      <NewTask add={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4 mt-8">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="flex justify-between my-4">
                <span className="text-stone-600 text-l">{task.text}</span>
                <button
                  onClick={() => onDel(task.id)}
                  className="text-stone-700 hover:text-red-700"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
