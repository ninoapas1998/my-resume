import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <div
      className="w-full items-center justify-center py-40"
      style={{ background: 'linear-gradient(0deg, #030712 0%, #111827 100%)' }}
    >
        <div className="mx-auto max-w-screen-xl">
            <div className="flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <h1 className="text-6xl font-bold text-[#008DDE] code">
                        Get In Touch
                    </h1>
                    <p className="text-5xl font-semibold text-white">
                        About me
                    </p>
                    <p className="text-2xl font-extralight text-white">
                        About me
                    </p>
                </div>
                <Link to="#">
                    <Button variant="solidToOutline">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}
