import { useState } from "react";

export default function NewTask({ add }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleClick() {
    if (!enteredTask.trim()) {
      return;
    }
    add(enteredTask);
    setEnteredTask("");
  }
  function handleEnter(event) {
    setEnteredTask(event.target.value);
  }

  return (
    <div className="flex items-center gap-4 mt-6">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleEnter}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
}
