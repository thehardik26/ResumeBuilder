import { useState } from "react";
import Dashboard from "./DashBoard";
import Editor from "./Editor";
import { createEmptyResume } from "../data";

export default function ResumeBuilder() {
  const [view, setView] = useState("dashboard");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resume, setResume] = useState(createEmptyResume());
  const [saved, setSaved] = useState(false);

  const chooseTemplate = (template) => {
    setSelectedTemplate(template);
    setResume(createEmptyResume());
    setSaved(false);
    setView("edit");
  };

  const updateField = (key, value) => {
    setResume((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const updateExperience = (index, key, value) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const addExperience = () => {
    setResume((current) => ({
      ...current,
      experience: [
        ...current.experience,
        { role: "", company: "", location: "", dates: "", details: "" },
      ],
    }));
  };

  const removeExperience = (index) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.filter((_, i) => i !== index),
    }));
  };

  const updateEducation = (index, key, value) => {
    setResume((current) => ({
      ...current,
      education: current.education.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const addEducation = () => {
    setResume((current) => ({
      ...current,
      education: [
        ...current.education,
        { school: "", degree: "", dates: "" },
      ],
    }));
  };

  const removeEducation = (index) => {
    setResume((current) => ({
      ...current,
      education: current.education.filter((_, i) => i !== index),
    }));
  };

  const updateProject = (index, key, value) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const addProject = () => {
    setResume((current) => ({
      ...current,
      projects: [
        ...current.projects,
        { name: "", description: "" },
      ],
    }));
  };

  const removeProject = (index) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    const skill = window.prompt("Enter skill");

    if (!skill?.trim()) return;

    setResume((current) => ({
      ...current,
      skills: [...current.skills, skill.trim()],
    }));
  };

  const removeSkill = (skill) => {
    setResume((current) => ({
      ...current,
      skills: current.skills.filter((item) => item !== skill),
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    localStorage.setItem(
      "resumeBuilderData",
      JSON.stringify({
        resume,
        template: selectedTemplate?.id,
      })
    );

    setSaved(true);

    setTimeout(() => setSaved(false), 2000);
  };

  const formProps = {
    updateField,
    updateExperience,
    addExperience,
    removeExperience,
    updateEducation,
    addEducation,
    removeEducation,
    updateProject,
    addProject,
    removeProject,
    addSkill,
    removeSkill,
    onSubmit: handleSave,
  };

  if (view === "dashboard") {
    return (
      <Dashboard
        selectedTemplate={selectedTemplate}
        onSelectTemplate={chooseTemplate}
      />
    );
  }

  return (
    <Editor
      resume={resume}
      selectedTemplate={selectedTemplate}
      saved={saved}
      setView={setView}
      {...formProps}
    />
  );
}