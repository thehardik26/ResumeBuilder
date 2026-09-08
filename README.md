# ResumeBuilder

ResumeBuilder is a React and Vite application for creating polished resumes from reusable templates. Choose a visual style, enter your professional information, preview the result as you work, and download the finished resume as an A4 PDF.

## Features

- Four resume templates: Modern, Professional, Minimal, and Creative
- Live resume preview while editing
- Personal information, summary, skills, experience, education, and projects sections
- Add and remove multiple experience, education, and project entries
- Add and remove skills
- Save feedback while working on a resume
- Download the completed resume as a PDF
- Responsive dashboard, editor, and template selection views

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS and Bootstrap
- Lucide React icons
- `html2canvas-pro` and `jsPDF` for PDF export

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository and move into the project directory.
2. Install the dependencies:

	```bash
	npm install
	```

3. Start the development server:

	```bash
	npm run dev
	```

4. Open the local URL shown by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## How To Use

1. Open the app at `/` and choose a resume template.
2. Complete the contact information and professional summary.
3. Add skills and fill in experience, education, and project details.
4. Review the live preview and save the resume.
5. Download the resume as a PDF from the editor.

## Routes

- `/` - Dashboard and template selection
- `/Home` - Template selection view
- `/editor/:templateId` - Resume editor for a selected template

## Project Structure

```text
src/
├── components/   Reusable dashboard, form, preview, and UI components
├── data/         Template definitions and default resume data
├── pages/        Dashboard and editor page views
├── templates/    Resume template layouts
├── App.jsx       Application routes
└── index.css     Global styles
```

## Notes

Resume data is currently held in React state for the active editor session. The save action confirms the current draft and logs its data in the browser console; persistent storage is not configured yet.

