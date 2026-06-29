import logo from '../../assets/nino-logo.svg';

export default function Hero() {
  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(0deg, #030712 0%, #111827 100%)' }}
    >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-screen flex-col items-center justify-center gap-16 py-20 sm:gap-24 lg:gap-33">
                <img
                    src={logo}
                    height={256}
                    className="h-32 w-auto object-cover sm:h-48 lg:h-64"
                    alt="Picture of the author"
                />
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-5xl font-bold text-[#008DDE] code sm:text-7xl lg:text-9xl">
                        <div>{'<Niño/>'}</div>
                    </h1>
                    <p className="text-center text-3xl text-white font-extralight sm:text-4xl lg:text-6xl">
                        the developer & designer
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
