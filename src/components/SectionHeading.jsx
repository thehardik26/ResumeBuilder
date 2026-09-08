export default function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Icon size={17} className="text-stone-700" />
      <h2 className="text-[15px] font-semibold text-stone-800">
        {children}
      </h2>
    </div>
  );
}