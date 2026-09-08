import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../pages/Home";
import Editor from "../pages/Editor";

export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const [currentPage, setCurrentPage] = useState("home");
    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
        setCurrentPage("editor");
    };
    const handleBackToHome = () => {
        setCurrentPage("home");
    };
    const handleHome = () => {
        setCurrentPage("home");
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#F2EEE6]">

            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                onHome={handleHome}
            />
            <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                <Navbar
                    onMenuClick={() => setIsSidebarOpen(true)}
                />
                <main className="min-h-0 flex-1 overflow-y-auto">
                    {currentPage === "home" && (
                        <Home
                            selectedTemplate={selectedTemplate}
                            onSelectTemplate={handleTemplateSelect}
                        />
                    )}
                    {currentPage === "editor" && selectedTemplate && (
                        <Editor
                            selectedTemplate={selectedTemplate}
                            onBack={handleBackToHome}
                        />
                    )}

                </main>

            </div>
        </div>
    );
}