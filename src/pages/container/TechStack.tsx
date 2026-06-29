export default function TechStack() {
  const techstack = [
  "Figma",
  "Adobe XD",
  "Photoshop",
  "Illustrator",
  "Canva",
  "CapCut",
  "HTML",
  "CSS3",
  "PHP",
  "Python",
  "ReactJS",
  "TailwindCSS",
  "Git",
];
  return (
    <div className="w-full flex">
      <div className="w-full rounded-2xl bg-white p-5 sm:p-8 shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
            Tech Stack
        </h1>
        <div className="w-full h-px bg-gray-100 rounded-full"></div>
        <p className="text-sm text-gray-800 font-medium">
          {techstack.map((techstack) => (
            <span key={techstack} className="block">
              {techstack}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}