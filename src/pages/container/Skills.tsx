export default function Skills() {
  const skills = [
  "UI/UX Design",
  "User Experience (UX) Research",
  "User Interface (UI) Design",
  "User-Centered Design",
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "Interactive Prototyping",
  "Design Systems",
  "Component Libraries",
  "Responsive & Mobile-First Design",
  "Dashboard Design",
  "Interaction Design",
  "Visual Design",
  "Accessibility",
  "Usability Testing",
  "Competitor Analysis",
  "Requirements Gathering",
  "Stakeholder Management",
  "Developer Handoff",
  "Design Documentation",
  "Front-End Web Development",
  "Website Maintenance",
  "Cross-Functional Collaboration",
  "QA Coordination",
  "Project Coordination",
  "Workflow Optimization",
  "AI-Assisted Productivity",
  "Branding",
  "Typography",
  "Content Creation",
  "Marketing Materials",
  "Communication",
  "Leadership",
  "Critical Thinking",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Multitasking",
  "Attention to Detail"
];

  return (
    <div className="w-full flex">
      <div className="w-[413px] rounded-2xl bg-white p-8 md:p-8 shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
            Skills
        </h1>
        <div className="w-full h-px bg-gray-100 rounded-full"></div>
        <p className="text-sm text-gray-800 font-medium">
          {skills.map((skill) => (
            <span key={skill} className="block">
              {skill}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}