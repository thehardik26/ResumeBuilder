import { ResumeSection } from "./ResumeSections";
import { ExperienceSection, EducationSection, ProjectsSection } from "./ResumeSections";

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

export default function Creative({ resume, accent }) {
  const skills = resume.skills.length
    ? resume.skills
    : ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git", "REST API"];

  const email = resume.email || "hardikpamale@gmail.com";
  const phone = resume.phone || "+91 98765 43210";
  const location = resume.location || "Pune, Maharashtra, India";
  const links = resume.links || "linkedin.com/in/hardikpamale · github.com/hardikpamale";
  const summary =
    resume.summary ||
    "Full Stack Developer passionate about building modern, scalable and user-friendly web applications using React, Node.js and modern web technologies.";

  const hasExperience = resume.experience?.some((e) => e.role || e.company);
  const hasEducation = resume.education?.some((e) => e.school || e.degree);
  const hasProjects = resume.projects?.some((p) => p.name || p.description);

  const sectionResume = {
    ...resume,
    experience: hasExperience ? resume.experience : demoExperience,
    education: hasEducation ? resume.education : demoEducation,
    projects: hasProjects ? resume.projects : demoProjects,
  };

  return (
    <div className="min-h-[900px] bg-stone-50 p-8 text-stone-800">
      {/* Header card */}
      <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div
            className="h-20 w-20 shrink-0 rounded-full"
            style={{ backgroundColor: `${accent}22` }}
          />

          <div>
            <h1 className="text-3xl font-bold leading-tight text-stone-800">
              {resume.fullName || "Hardik Pamale"}
            </h1>
            <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
              {resume.title || "Full Stack Developer"}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-stone-100 pt-4 text-xs text-stone-500">
          <span>{email}</span>
          <span>{phone}</span>
          <span>{location}</span>
          <span>{links}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[32%_1fr]">
        {/* Sidebar column */}
        <div className="space-y-6">
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              About Me
            </p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              {summary}
            </p>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">
              Skills
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ backgroundColor: `${accent}15`, color: accent }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main column */}
        <div className="space-y-6">
          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <ExperienceSection resume={sectionResume} accent={accent} />
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <ProjectsSection resume={sectionResume} accent={accent} />
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
            <EducationSection resume={sectionResume} accent={accent} />
          </div>
        </div>
      </div>
    </div>
  );
}