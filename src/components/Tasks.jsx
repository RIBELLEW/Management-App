import NewTask from "./NewTask.jsx";

export default function Tasks() {
  return (
    <section>
      <h2 className="text-2xl font-semibold uppercase text-stone-700/90 mb-4">
        Tasks
      </h2>
      <NewTask />
      <p className="text-stone-800 mb-4 my-4">
        This project does not have any tasks yet.
      </p>
      <ul></ul>
    </section>
  );
}
