export default function Sidebar({
    isOpen,
    onClose,
    onHome,
}) {
    return (
        <aside
            className={`
                h-screen w-64 shrink-0
                bg-gradient-to-b from-gray-700 to-blue-500
                text-white
                ${isOpen ? "block" : "hidden md:block"}
            `}
        >
            <div className="p-6">
                <h1 className="text-3xl font-medium">
                    Dashboard
                </h1>
                <div className="mt-16">

                    <button
                        type="button"
                        onClick={onHome}
                        className="w-full rounded-xl px-4 py-3 text-left text-lg transition hover:bg-white/10"
                    >
                        Home
                    </button>

                </div>

            </div>
        </aside>
    );
}