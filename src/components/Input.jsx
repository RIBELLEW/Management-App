import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "border-stone-300 w-full p-1 border-b-2 rounded-sm bg-stone-200 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col ">
      <label className="uppercase text-sm font-bold text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={classes} ref={ref} />
      ) : (
        <input className={classes} {...props} ref={ref} />
      )}
    </p>
  );
});
export default Input;
