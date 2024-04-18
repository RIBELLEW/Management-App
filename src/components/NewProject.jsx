import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
export default function NewProject({ onAdd, onCancelClick }) {
  const modal = useRef();

  const titleR = useRef();
  const descriptionR = useRef();
  const dueDateR = useRef();

  function handleSave() {
    const enteredTitle = titleR.current.value;
    const enteredDescription = descriptionR.current.value;
    const enteredDueDate = dueDateR.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-1">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-6">
          Please make sure you provided a valid value for every input field.
        </p>
      </Modal>
      <div className="w-2/3 mt-16 py-32 px-20">
        <menu className="flex pr-20 justify-end items-center gap-4 my-4 ">
          <li>
            <button
              className="rounded-md px-4 py-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100"
              onClick={onCancelClick}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-stone-800 rounded-md px-6 py-2 text-stone-200 hover:bg-stone-950 hover:text-stone-50"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="flex flex-col px-20 gap-8">
          <Input label="Title" type="text" ref={titleR} />
          <Input label="Description" textarea ref={descriptionR} />
          <Input label="Due date" type="date" ref={dueDateR} />
        </div>
      </div>
    </>
  );
}
