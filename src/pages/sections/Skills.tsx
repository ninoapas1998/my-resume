import ui from "../../assets/icons/pen-nib.svg";
import autom from "../../assets/icons/code-fork.svg";
import web from "../../assets/icons/code.svg";

export default function Skills() {
  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(0deg, #030712 0%, #111827 100%)' }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 items-center justify-center py-20 sm:py-24 lg:gap-16 lg:py-32">
          <h1 className="text-center text-4xl font-bold text-[#008DDE] code sm:text-5xl lg:text-6xl">
            My Skills
          </h1>
          <div className="flex flex-col gap-12 justify-center w-full">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
              <img
                src={ui}
                width={144}
                height={144}
                className="h-24 w-24 shrink-0 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                alt=""
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-white code sm:text-3xl lg:text-4xl">
                  UI/UX Designer
                </h1>
                <p className="text-lg text-white font-extralight sm:text-xl lg:text-2xl">
                  5+ years of experience designing user-centered web and mobile applications from research to developer handoff. Experienced in UX research, user flows, wireframing, prototyping, design systems, usability testing, responsive design, and accessibility. Proficient in Figma, Adobe XD, and collaborating with cross-functional Agile teams to deliver scalable digital products.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
              <img
                src={web}
                width={144}
                height={144}
                className="h-24 w-24 shrink-0 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                alt=""
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-white code sm:text-3xl lg:text-4xl">
                  Programmer/Developer
                </h1>
                <p className="text-lg text-white font-extralight sm:text-xl lg:text-2xl">
                  Experienced in front-end web development using HTML, CSS, PHP, and basic Python. Developed and maintained responsive websites, implemented client requirements, optimized website performance, collaborated with QA and developers, and ensured responsive, production-ready solutions across multiple projects.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
              <img
                src={autom}
                width={144}
                height={144}
                className="h-24 w-24 shrink-0 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                alt=""
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-white code sm:text-3xl lg:text-4xl">
                  AI & Automation
                </h1>
                <p className="text-lg text-white font-extralight sm:text-xl lg:text-2xl">
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
