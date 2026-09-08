import {
  User,
  Briefcase,
  GraduationCap,
  FileText,
  Palette,
  Plus,
  Trash2,
  Check,
} from "lucide-react";
import Field from "./Field";
import SectionHeading from "./SectionHeading";
import { inputClass } from "./UI";

export default function ResumeForm({
  resume,
  saved,
  selectedTemplate,
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
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <section>
        <SectionHeading icon={User}>
          Personal Information
        </SectionHeading>

        <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name">
              <input
                className={inputClass}
                value={resume.fullName}
                onChange={(e) =>
                  updateField("fullName", e.target.value)
                }
                placeholder="Enter Your Name :"
                required
              />
            </Field>

            <Field label="Job Title">
              <input
                className={inputClass}
                value={resume.title}
                onChange={(e) =>
                  updateField("title", e.target.value)
                }
                placeholder="Full Stack Developer"
              />
            </Field>

            <Field label="Email">
              <input
                type="email"
                className={inputClass}
                value={resume.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                placeholder="hardik@email.com"
              />
            </Field>

            <Field label="Phone">
              <input
                className={inputClass}
                value={resume.phone}
                onChange={(e) =>
                  updateField("phone", e.target.value)
                }
                placeholder="+91 98765 43210"
              />
            </Field>

            <Field label="Location">
              <input
                className={inputClass}
                value={resume.location}
                onChange={(e) =>
                  updateField("location", e.target.value)
                }
                placeholder="Pune, Maharashtra, India"
              />
            </Field>

            <Field label="Links">
              <input
                className={inputClass}
                value={resume.links}
                onChange={(e) =>
                  updateField("links", e.target.value)
                }
                placeholder="LinkedIn · GitHub · Portfolio"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Professional Summary">
              <textarea
                className={inputClass}
                rows={4}
                value={resume.summary}
                onChange={(e) =>
                  updateField("summary", e.target.value)
                }
                placeholder="Write a short professional summary..."
              />
            </Field>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <SectionHeading icon={Palette}>Skills</SectionHeading>

          <button
            type="button"
            onClick={addSkill}
            className="mb-4 flex items-center gap-1 text-xs font-medium text-stone-600"
          >
            <Plus size={14} /> Add Skill
          </button>
        </div>

        <div className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <button
                type="button"
                key={skill}
                onClick={() => removeSkill(skill)}
                className="rounded-full bg-stone-100 px-3 py-1.5 text-xs text-stone-700 hover:bg-red-50 hover:text-red-600"
              >
                {skill} ×
              </button>
            ))}

            {!resume.skills.length && (
              <p className="text-sm text-stone-400">
                No skills added yet.
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <SectionHeading icon={Briefcase}>
            Experience
          </SectionHeading>

          <button
            type="button"
            onClick={addExperience}
            className="mb-4 flex items-center gap-1 text-xs font-medium text-stone-600"
          >
            <Plus size={14} /> Add Role
          </button>
        </div>

        <div className="space-y-5">
          {resume.experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex justify-between">
                <span className="text-xs text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {resume.experience.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="text-stone-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Role">
                  <input
                    className={inputClass}
                    value={exp.role}
                    onChange={(e) =>
                      updateExperience(index, "role", e.target.value)
                    }
                    placeholder="Frontend Developer"
                  />
                </Field>

                <Field label="Company">
                  <input
                    className={inputClass}
                    value={exp.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    placeholder="Tech Company"
                  />
                </Field>

                <Field label="Location">
                  <input
                    className={inputClass}
                    value={exp.location}
                    onChange={(e) =>
                      updateExperience(index, "location", e.target.value)
                    }
                    placeholder="Pune, India"
                  />
                </Field>

                <Field label="Dates">
                  <input
                    className={inputClass}
                    value={exp.dates}
                    onChange={(e) =>
                      updateExperience(index, "dates", e.target.value)
                    }
                    placeholder="2024 — Present"
                  />
                </Field>
              </div>

              <div className="mt-3">
                <Field label="Details — one per line">
                  <textarea
                    className={inputClass}
                    rows={4}
                    value={exp.details}
                    onChange={(e) =>
                      updateExperience(index, "details", e.target.value)
                    }
                    placeholder={"Built React applications Integrated REST APIs"}
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <SectionHeading icon={GraduationCap}>
            Education
          </SectionHeading>

          <button
            type="button"
            onClick={addEducation}
            className="mb-4 flex items-center gap-1 text-xs font-medium text-stone-600"
          >
            <Plus size={14} /> Add School
          </button>
        </div>

        <div className="space-y-4">
          {resume.education.map((education, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="flex gap-3">
                <div className="grid flex-1 gap-3 sm:grid-cols-3">
                  <Field label="School">
                    <input
                      className={inputClass}
                      value={education.school}
                      onChange={(e) =>
                        updateEducation(index, "school", e.target.value)
                      }
                      placeholder="University"
                    />
                  </Field>

                  <Field label="Degree">
                    <input
                      className={inputClass}
                      value={education.degree}
                      onChange={(e) =>
                        updateEducation(index, "degree", e.target.value)
                      }
                      placeholder="B.E. Computer Engineering"
                    />
                  </Field>

                  <Field label="Dates">
                    <input
                      className={inputClass}
                      value={education.dates}
                      onChange={(e) =>
                        updateEducation(index, "dates", e.target.value)
                      }
                      placeholder="2021 — 2025"
                    />
                  </Field>
                </div>

                {resume.education.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="mt-7 text-stone-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <SectionHeading icon={FileText}>
            Projects
          </SectionHeading>

          <button
            type="button"
            onClick={addProject}
            className="mb-4 flex items-center gap-1 text-xs font-medium text-stone-600"
          >
            <Plus size={14} /> Add Project
          </button>
        </div>

        <div className="space-y-4">
          {resume.projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 flex justify-between">
                <span className="text-xs text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {resume.projects.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeProject(index)}
                    className="text-stone-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <Field label="Project Name">
                <input
                  className={inputClass}
                  value={project.name}
                  onChange={(e) =>
                    updateProject(index, "name", e.target.value)
                  }
                  placeholder="Resume Builder"
                />
              </Field>

              <div className="mt-3">
                <Field label="Description">
                  <textarea
                    className={inputClass}
                    rows={3}
                    value={project.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    placeholder="Describe your project..."
                  />
                </Field>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
        <button
          type="submit"
          className="rounded-lg px-6 py-2.5 text-sm font-medium text-white hover:opacity-90"
          style={{ backgroundColor: selectedTemplate.accent }}
        >
          Save Resume
        </button>

        {saved && (
          <span className="flex items-center gap-1.5 text-sm text-emerald-600">
            <Check size={16} /> Saved
          </span>
        )}
      </div>
    </form>
  );
}