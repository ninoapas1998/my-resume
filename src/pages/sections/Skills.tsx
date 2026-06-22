export default function Skills() {
  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #030712 0%, #111827 100%)' }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-16 items-center justify-center min-h-screen">
          <h1 className="text-6xl font-bold text-[#008DDE] code">
            My Skills
          </h1>
          <div className="flex flex-col gap-12 items-left justify-center w-full">
            <div className="flex gap-8">
              <div
                style={{ width: '144px', height: '144px', backgroundColor: '#D9D9D9' }}
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white code">
                    UI/UX Designer
                </h1>
                <p className="text-2xl text-white font-extralight">
                    5 years of experience
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div
                style={{ width: '144px', height: '144px', backgroundColor: '#D9D9D9' }}
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white code">
                    Programmer/Developer
                </h1>
                <p className="text-2xl text-white font-extralight">
                    Aspiring Web Developer
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div
                style={{ width: '144px', height: '144px', backgroundColor: '#D9D9D9' }}
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold text-white code">
                    Automation
                </h1>
                <p className="text-2xl text-white font-extralight">
                    Aspiring Automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
