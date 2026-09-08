import { useState, useEffect } from "react";
import TemplateCard from "./TemplateCard";

const templates = [
    { id: "modern", name: "Modern", blurb: "Clean and professional with a strong modern layout.", accent: "#1f3d2b" },
    { id: "classic", name: "Classic", blurb: "Traditional resume layout, ATS-friendly.", accent: "#2563eb" },
    { id: "minimal", name: "Minimal", blurb: "Simple, distraction-free single column.", accent: "#7c3aed" },
];

export default function TemplateGrid() {
    // 1. Initialize state from localStorage so it restores when coming back
    const [selectedId, setSelectedId] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("selectedTemplateId") || null;
        }
        return null;
    });

    // 2. Save to localStorage whenever selectedId changes
    const handleSelect = (id) => {
        setSelectedId(id);
        localStorage.setItem("selectedTemplateId", id);
    };

    return (
        <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
                <TemplateCard
                    key={template.id}
                    template={template}
                    selected={selectedId === template.id}
                    onSelect={() => handleSelect(template.id)}
                />
            ))}
        </div>
    );
}