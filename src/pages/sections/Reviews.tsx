export default function Reviews() {
  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #111827 100%)' }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-16 items-center justify-center py-32">
          <h1 className="text-6xl font-bold text-[#008DDE] code">
            Reviews
          </h1>
          <div className="flex w-full items-center justify-between gap-16">
            <div
                style={{ width: '64px', height: '64px', backgroundColor: '#D9D9D9' }}
              />
            <div className="flex gap-8 w-[1024px] bg-black/30 p-16 rounded-[64px]">
              <div
                style={{ width: '144px', height: '144px', backgroundColor: '#D9D9D9' }}
              />
              <div className="flex flex-col gap-4 justify-center">
                <h1 className="text-4xl font-bold text-white code">
                    name
                </h1>
                <p className="text-2xl text-white font-extralight">
                    testimonial
                </p>
              </div>
            </div>
            <div
                style={{ width: '64px', height: '64px', backgroundColor: '#D9D9D9' }}
              />
          </div>
        </div>
      </div>
    </div>
  );
}
