import Modern from "../templates/Modern";
import Professional from "../templates/Professional";
import Minimal from "../templates/Minimal";
import Creative from "../templates/Creative";

export default function ResumePreview({
    resume,
    template,
}) {
    if (!template) {
        return <Modern resume={resume} accent="#2B4C3F" />;
    }

    switch (template.id) {
        case "modern":
            return (
                <Modern
                    resume={resume}
                    accent={template.accent}
                />
            );

        case "professional":
            return (
                <Professional
                    resume={resume}
                    accent={template.accent}
                />
            );

        case "minimal":
            return (
                <Minimal
                    resume={resume}
                    accent={template.accent}
                />
            );

        case "creative":
            return (
                <Creative
                    resume={resume}
                    accent={template.accent}
                />
            );

        default:
            return (
                <Modern
                    resume={resume}
                    accent={template.accent}
                />
            );
    }
}