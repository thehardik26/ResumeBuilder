export function ResumeSection({ title, accent, children }) {
  return (
    <section className="mt-7">
      <h2
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: accent }}
      >
        {title}
      </h2>

      <div className="mt-2 border-t border-stone-200 pt-3">
        {children}
      </div>
    </section>
  );
}

export function ContactInfo({ resume }) {
  const values = [
    resume.location,
    resume.phone,
    resume.email,
    resume.links,
  ].filter(Boolean);

  return (
    <p className="text-xs leading-5 text-stone-500">
      {values.join(" · ") ||
        "Pune, Maharashtra · +91 98765 43210 · hardikpamale@gmail.com"}
    </p>
  );
}

export function ExperienceSection({ resume, accent }) {
  const items = resume.experience.filter(
    (item) => item.role || item.company
  );

  if (!items.length) return null;

  return (
    <ResumeSection title="Experience" accent={accent}>
      <div className="space-y-5">
        {items.map((exp, index) => (
          <div key={index}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold">{exp.role || "Role"}</h3>
                {exp.company && (
                  <p className="text-sm text-stone-600">{exp.company}</p>
                )}
              </div>

              {exp.dates && (
                <span className="whitespace-nowrap text-xs text-stone-400">
                  {exp.dates}
                </span>
              )}
            </div>

            {exp.location && (
              <p className="mt-1 text-xs" style={{ color: accent }}>
                {exp.location}
              </p>
            )}

            {exp.details && (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-stone-600">
                {exp.details
                  .split("\n")
                  .filter(Boolean)
                  .map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

export function EducationSection({ resume, accent }) {
  const items = resume.education.filter(
    (item) => item.school || item.degree
  );

  if (!items.length) return null;

  return (
    <ResumeSection title="Education" accent={accent}>
      <div className="space-y-3">
        {items.map((education, index) => (
          <div
            key={index}
            className="flex items-start justify-between gap-4"
          >
            <div>
              <p className="text-sm font-bold">{education.school}</p>
              {education.degree && (
                <p className="text-sm text-stone-600">
                  {education.degree}
                </p>
              )}
            </div>

            {education.dates && (
              <span className="whitespace-nowrap text-xs text-stone-400">
                {education.dates}
              </span>
            )}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

export function ProjectsSection({ resume, accent }) {
  const items = resume.projects.filter(
    (item) => item.name || item.description
  );

  if (!items.length) return null;

  return (
    <ResumeSection title="Projects" accent={accent}>
      <div className="space-y-4">
        {items.map((project, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold">
              {project.name || "Project"}
            </h3>

            {project.description && (
              <p className="mt-1 text-sm leading-5 text-stone-600">
                {project.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

export function SkillsSection({ resume, accent }) {
  const skills = resume.skills.length
    ? resume.skills
    : [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Git",
        "REST API",
      ];

  return (
    <ResumeSection title="Skills" accent={accent}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </ResumeSection>
  );
}