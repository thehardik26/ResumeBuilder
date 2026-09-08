import { ContactInfo, ExperienceSection, EducationSection, ProjectsSection, SkillsSection } from "./ResumeSections";

const demoExperience = [
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
];

const demoEducation = [
  {
    school: "Savitribai Phule Pune University",
    degree: "B.E. Computer Engineering",
    dates: "2021 — 2025",
  },
];

const demoProjects = [
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
];

const demoSkills = ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "REST API"];

export default function Professional({ resume, accent }) {
  const summary =
    resume.summary ||
    "Full Stack Developer passionate about building modern, scalable and user-friendly web applications using React, Node.js and modern web technologies.";

  const hasExperience = resume.experience?.some((e) => e.role || e.company);
  const hasEducation = resume.education?.some((e) => e.school || e.degree);
  const hasProjects = resume.projects?.some((p) => p.name || p.description);

  const sectionResume = {
    ...resume,
    email: resume.email || "hardikpamale@gmail.com",
    phone: resume.phone || "+91 98765 43210",
    location: resume.location || "Pune, Maharashtra, India",
    links: resume.links || "linkedin.com/in/hardikpamale · github.com/hardikpamale",
    experience: hasExperience ? resume.experience : demoExperience,
    education: hasEducation ? resume.education : demoEducation,
    projects: hasProjects ? resume.projects : demoProjects,
    skills: resume.skills?.length ? resume.skills : demoSkills,
  };

  return (
    <div className="min-h-[900px] bg-white p-10 font-serif text-stone-800">
      <h1 className="text-center text-4xl font-bold">
        {resume.fullName || "Hardik Pamale"}
      </h1>

      <div className="mt-2 text-center">
        <ContactInfo resume={sectionResume} />
      </div>

      <div
        className="mx-auto mt-4 h-[2px] w-4/5"
        style={{ backgroundColor: accent }}
      />

      <div className="mt-7">
        <h2 className="text-xs font-bold uppercase" style={{ color: accent }}>
          Summary
        </h2>
        <div className="mt-2 border-t border-stone-200 pt-3">
          <p className="text-sm leading-6 text-stone-600">{summary}</p>
        </div>
      </div>

      <ExperienceSection resume={sectionResume} accent={accent} />
      <EducationSection resume={sectionResume} accent={accent} />
      <ProjectsSection resume={sectionResume} accent={accent} />
      <SkillsSection resume={sectionResume} accent={accent} />
    </div>
  );
}