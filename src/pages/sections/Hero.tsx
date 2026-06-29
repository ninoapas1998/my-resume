import logo from '../../assets/nino-logo.svg';

export default function Hero() {
  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(0deg, #030712 0%, #111827 100%)' }}
    >
        <div className="mx-auto max-w-screen-xl">
            <div className="flex flex-col gap-33 items-center justify-center min-h-screen">
                <img
                    src={logo}
                    height={256}
                    className="object-cover"
                    alt="Picture of the author"
                />
                <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-9xl font-bold text-[#008DDE] code">
                        <div>{'<Niño/>'}</div>
                    </h1>
                    <p className="text-6xl text-white font-extralight">
                        the developer & designer
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
