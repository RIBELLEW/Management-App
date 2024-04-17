export default function ProjectSidebar() {
  return (
    <aside className="rounded-tr-xl mt-16 px-8 py-16 w-1/3  pb-80 bg-stone-900 md:w-72">
      <h2 className="text-2xl first:font-bold uppercase text-stone-100 mb-8 md:text-xl">
        Your Projects
      </h2>
      <div>
        <button className="text-stone-400 text-xs md:text-base px-4 py-2 rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
