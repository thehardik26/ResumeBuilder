export default function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-stone-500">
        {label}
      </span>
      {children}
    </label>
  );
}