export default function Button({ children, ...props }) {
  return (
    <button
      className="text-stone-400 text-xs md:text-base px-4 py-2 rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
