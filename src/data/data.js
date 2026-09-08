export const TEMPLATES = [
  {
    id: "modern",
    name: "Modern",
    blurb: "Clean and professional with a strong modern layout.",
    accent: "#2B4C3F",
  },
  {
    id: "professional",
    name: "Professional",
    blurb: "Traditional and professional layout for corporate roles.",
    accent: "#1F3A5F",
  },
  {
    id: "minimal",
    name: "Minimal",
    blurb: "Simple typography and plenty of whitespace.",
    accent: "#4A4A45",
  },
  {
    id: "creative",
    name: "Creative",
    blurb: "Creative layout with color and portfolio-friendly sections.",
    accent: "#8C3B2E",
  },
];

export const createEmptyResume = () => ({
  fullName: "",
  title: "",
  email: "",
  phone: "",
  location: "",
  links: "",
  summary: "",
  skills: [],
  experience: [
    { role: "", company: "", location: "", dates: "", details: "" },
  ],
  education: [{ school: "", degree: "", dates: "" }],
  projects: [{ name: "", description: "" }],
});