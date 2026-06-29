import ui from "../../assets/icons/pen-nib.svg";
import autom from "../../assets/icons/code-fork.svg";
import web from "../../assets/icons/code.svg";

export default function Skills() {
  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(0deg, #030712 0%, #111827 100%)' }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-16 items-center justify-center py-32">
          <h1 className="text-6xl font-bold text-[#008DDE] code">
            My Skills
          </h1>
          <div className="flex flex-col gap-12 items-left justify-center w-full">
            <div className="flex gap-8">
              <img
                src={ui}
                width={144}
                height={144}
                alt="Picture of the author"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white code">
                  UI/UX Designer
                </h1>
                <p className="text-2xl text-white font-extralight">
                  5+ years of experience designing user-centered web and mobile applications from research to developer handoff. Experienced in UX research, user flows, wireframing, prototyping, design systems, usability testing, responsive design, and accessibility. Proficient in Figma, Adobe XD, and collaborating with cross-functional Agile teams to deliver scalable digital products.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <img
                src={web}
                width={144}
                height={144}
                alt="Picture of the author"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white code">
                  Programmer/Developer
                </h1>
                <p className="text-2xl text-white font-extralight">
                  Experienced in front-end web development using HTML, CSS, PHP, and basic Python. Developed and maintained responsive websites, implemented client requirements, optimized website performance, collaborated with QA and developers, and ensured responsive, production-ready solutions across multiple projects.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <img
                src={autom}
                width={144}
                height={144}
                alt="Picture of the author"
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white code">
                  AI & Automation
                </h1>
                <p className="text-2xl text-white font-extralight">
                  Knowledgeable in workflow automation and process optimization with experience using Python and AI-powered tools to improve productivity. Familiar with automating repetitive tasks, integrating business workflows, and leveraging modern automation platforms to streamline design, documentation, and operational processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
