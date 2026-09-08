import { Check } from "lucide-react";
import ResumePreview from "./ResumePreview";

const demoResume = {
    fullName: "Hardik Pamale",
    title: "Full Stack Developer",
    email: "hardikpamale@gmail.com",
    phone: "+91 98765 43210",
    location: "Pune, Maharashtra, India",
    links: "linkedin.com/in/hardikpamale · github.com/hardikpamale",

    summary:
        "Full Stack Developer passionate about building modern, scalable and user-friendly web applications using React, Node.js and modern web technologies.",

    skills: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Git",
        "REST API",
    ],

    experience: [
        {
            role: "Full Stack Developer",
            company: "Tech Solutions",
            location: "Pune, India",
            dates: "2024 — Present",
            details:
                "Built responsive React applications\nDeveloped REST APIs using Node.js and Express\nIntegrated MongoDB and third-party APIs",
        },
        {
            role: "Frontend Developer Intern",
            company: "Web Technologies",
            location: "Pune, India",
            dates: "2023 — 2024",
            details:
                "Developed reusable React components\nImproved website performance and responsiveness",
        },
    ],

    education: [
        {
            school: "Savitribai Phule Pune University",
            degree: "B.E. Computer Engineering",
            dates: "2021 — 2025",
        },
    ],

    projects: [
        {
            name: "Resume Builder",
            description:
                "A React-based resume builder with multiple professional templates and live preview.",
        },
        {
            name: "ChessHub",
            description:
                "A web application for managing chess games, players and tournament activities.",
        },
    ],
};

export default function TemplateCard({
    template,
    selected,
    onSelect,
}) {
    return (
        <div
            onClick={onSelect}
            className={`group cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                selected
                    ? "border-stone-900 ring-2 ring-stone-900 ring-offset-2"
                    : "border-stone-200"
            }`}
        >
            <div className="relative w-full bg-stone-100">
                <div
                    className="relative w-full overflow-hidden bg-white"
                    style={{ aspectRatio: "210 / 297" }}
                >
                    <div
                        className="absolute left-0 top-0 origin-top-left"
                        style={{
                            width: 794,
                            height: 1123,
                            transform: "scale(0.29)",
                        }}
                    >
                        <ResumePreview
                            resume={demoResume}
                            template={template}
                        />
                    </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-5" />
            </div>
            <div className="border-t border-stone-100 p-4">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h2 className="text-base font-semibold text-stone-900">
                            {template.name}
                        </h2>

                        <p className="mt-1 line-clamp-2 text-xs leading-5 text-stone-500">
                            {template.blurb}
                        </p>
                    </div>
                    {selected && (
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white shadow">
                            <Check
                                size={14}
                                strokeWidth={3}
                            />
                        </span>
                    )}
                </div>
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect();
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98]"
                    style={{
                        backgroundColor: template.accent,
                    }}
                >
                    {selected && (
                        <Check
                            size={15}
                            strokeWidth={3}
                        />
                    )}

                    {selected
                        ? "Selected"
                        : "Use this template"}
                </button>
            </div>
        </div>
    );
}