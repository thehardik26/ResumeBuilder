import { useState, useRef } from "react";
import { ArrowLeft, FileText, Download, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
// import html2canvas from "html2canvas";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";
import { TEMPLATES } from "../data/data";



const initialResume = {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    links: "",
    summary: "",

    skills: [],

    experience: [
        {
            role: "",
            company: "",
            location: "",
            dates: "",
            details: "",
        },
    ],

    education: [
        {
            school: "",
            degree: "",
            dates: "",
        },
    ],

    projects: [
        {
            name: "",
            description: "",
        },
    ],
};

export default function Editor() {
    const { templateId } = useParams();
    const navigate = useNavigate();

    const [resume, setResume] = useState(initialResume);
    const [saved, setSaved] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const resumeRef = useRef(null);

    const selectedTemplate = TEMPLATES.find(
        (template) => template.id === templateId
    );

    const updateField = (field, value) => {
        setResume((prev) => ({
            ...prev,
            [field]: value,
        }));

        setSaved(false);
    };

    const addSkill = () => {
        const skill = window.prompt("Enter skill:");

        if (!skill || !skill.trim()) {
            return;
        }

        setResume((prev) => ({
            ...prev,
            skills: [...prev.skills, skill.trim()],
        }));

        setSaved(false);
    };

    const removeSkill = (skillToRemove) => {
        setResume((prev) => ({
            ...prev,
            skills: prev.skills.filter(
                (skill) => skill !== skillToRemove
            ),
        }));

        setSaved(false);
    };

    const addExperience = () => {
        setResume((prev) => ({
            ...prev,
            experience: [
                ...prev.experience,
                {
                    role: "",
                    company: "",
                    location: "",
                    dates: "",
                    details: "",
                },
            ],
        }));

        setSaved(false);
    };

    const updateExperience = (index, field, value) => {
        setResume((prev) => ({
            ...prev,
            experience: prev.experience.map(
                (experience, i) =>
                    i === index
                        ? {
                            ...experience,
                            [field]: value,
                        }
                        : experience
            ),
        }));

        setSaved(false);
    };

    const removeExperience = (index) => {
        setResume((prev) => ({
            ...prev,
            experience: prev.experience.filter(
                (_, i) => i !== index
            ),
        }));

        setSaved(false);
    };

    const addEducation = () => {
        setResume((prev) => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    school: "",
                    degree: "",
                    dates: "",
                },
            ],
        }));

        setSaved(false);
    };

    const updateEducation = (index, field, value) => {
        setResume((prev) => ({
            ...prev,
            education: prev.education.map(
                (education, i) =>
                    i === index
                        ? {
                              ...education,
                              [field]: value,
                          }
                        : education
            ),
        }));

        setSaved(false);
    };

    const removeEducation = (index) => {
        setResume((prev) => ({
            ...prev,
            education: prev.education.filter(
                (_, i) => i !== index
            ),
        }));

        setSaved(false);
    };

    const addProject = () => {
        setResume((prev) => ({
            ...prev,
            projects: [
                ...prev.projects,
                {
                    name: "",
                    description: "",
                },
            ],
        }));

        setSaved(false);
    };

    const updateProject = (index, field, value) => {
        setResume((prev) => ({
            ...prev,
            projects: prev.projects.map(
                (project, i) =>
                    i === index
                        ? {
                              ...project,
                              [field]: value,
                          }
                        : project
            ),
        }));

        setSaved(false);
    };

    const removeProject = (index) => {
        setResume((prev) => ({
            ...prev,
            projects: prev.projects.filter(
                (_, i) => i !== index
            ),
        }));

        setSaved(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Resume saved:", resume);

        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 2000);
    };

    const downloadPDF = async () => {
        if (!resumeRef.current) {
            return;
        }

        try {
            setDownloading(true);

            await new Promise((resolve) =>
                setTimeout(resolve, 300)
            );

            const element = resumeRef.current;

            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: "#ffffff",
                logging: false,
            });

            const imgData = canvas.toDataURL(
                "image/png",
                1.0
            );

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4",
            });

            const pageWidth = 210;
            const pageHeight = 297;

            const imgWidth = pageWidth;
            const imgHeight =
                (canvas.height * imgWidth) /
                canvas.width;

            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(
                imgData,
                "PNG",
                0,
                position,
                imgWidth,
                imgHeight
            );

            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight;

                pdf.addPage();

                pdf.addImage(
                    imgData,
                    "PNG",
                    0,
                    position,
                    imgWidth,
                    imgHeight
                );

                heightLeft -= pageHeight;
            }

            const fileName =
                resume.fullName?.trim()
                    ? `${resume.fullName.trim()}_Resume.pdf`
                    : "Resume.pdf";

            pdf.save(fileName);

        } catch (error) {
            console.error(
                "PDF generation failed:",
                error
            );

            alert(
                "Unable to download the resume. Please try again."
            );
        } finally {
            setDownloading(false);
        }
    };

    if (!selectedTemplate) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#F2EEE6]">

                <div className="rounded-2xl bg-white p-10 text-center shadow-lg">

                    <FileText
                        size={45}
                        className="mx-auto mb-4 text-stone-400"
                    />

                    <h1 className="text-2xl font-semibold text-stone-900">
                        Template Not Found
                    </h1>

                    <p className="mt-2 text-sm text-stone-500">
                        The selected template could not be found.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="mt-6 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700"
                    >
                        Back to Templates
                    </button>

                </div>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F2EEE6]">

            <main className="mx-auto max-w-7xl px-6 py-8">

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="mb-6 flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-stone-900"
                >
                    <ArrowLeft size={17} />

                    Back to templates
                </button>

                <div className="mb-8 flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3">

                        <span
                            className="h-3.5 w-3.5 rounded-full"
                            style={{
                                backgroundColor:
                                    selectedTemplate.accent,
                            }}
                        />

                        <div>

                            <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
                                Editing your{" "}
                                {selectedTemplate.name} resume
                            </h1>

                            <p className="mt-1 text-sm text-stone-500">
                                Enter your information and see your
                                resume update instantly.
                            </p>

                        </div>

                    </div>

                    <button
                        type="button"
                        onClick={downloadPDF}
                        disabled={downloading}
                        className="flex shrink-0 items-center gap-2 rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {downloading ? (
                            <>
                                <Loader2
                                    size={16}
                                    className="animate-spin"
                                />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Download size={16} />
                                Download PDF
                            </>
                        )}
                    </button>

                </div>

                <div className="grid items-start gap-10 lg:grid-cols-2">

                    <div className="min-w-0">

                        <ResumeForm
                            resume={resume}
                            saved={saved}
                            selectedTemplate={
                                selectedTemplate
                            }

                            updateField={
                                updateField
                            }

                            updateExperience={
                                updateExperience
                            }

                            addExperience={
                                addExperience
                            }

                            removeExperience={
                                removeExperience
                            }

                            updateEducation={
                                updateEducation
                            }

                            addEducation={
                                addEducation
                            }

                            removeEducation={
                                removeEducation
                            }

                            updateProject={
                                updateProject
                            }

                            addProject={
                                addProject
                            }

                            removeProject={
                                removeProject
                            }

                            addSkill={addSkill}
                            removeSkill={
                                removeSkill
                            }

                            onSubmit={
                                handleSubmit
                            }
                        />

                    </div>

                    <div className="min-w-0 lg:sticky lg:top-24">

                        <div className="mb-4 flex items-center justify-between">

                            <div>

                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                                    Live Preview
                                </p>

                                <p className="mt-1 text-sm text-stone-500">
                                    Complete resume preview
                                </p>

                            </div>

                            <span
                                className="rounded-full px-3 py-1.5 text-xs font-medium text-white"
                                style={{
                                    backgroundColor:
                                        selectedTemplate.accent,
                                }}
                            >
                                {selectedTemplate.name}
                            </span>

                        </div>

                        <div
                            ref={resumeRef}
                            className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-2xl"
                        >

                            <ResumePreview
                                resume={resume}
                                template={
                                    selectedTemplate
                                }
                            />

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}