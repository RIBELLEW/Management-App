export default function ({ label, textarea, ...props }) {
  return (
    <p className="flex flex-col ">
      <label className="uppercase text-xs font-bold text-stone-600">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className="bg-stone-200" />
      ) : (
        <input className="bg-stone-200" {...props} />
      )}
    </p>
  );
}
