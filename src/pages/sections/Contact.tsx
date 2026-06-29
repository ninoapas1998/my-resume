import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <div
      className="w-full items-center justify-center py-20 sm:py-28 lg:py-40"
      style={{ background: 'linear-gradient(0deg, #030712 0%, #111827 100%)' }}
    >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12 items-center justify-center">
                <div className="flex flex-col gap-8 items-center justify-center">
                    <h1 className="text-center text-4xl font-bold text-[#008DDE] code sm:text-5xl lg:text-6xl">
                        Get In Touch
                    </h1>
                    <p className="max-w-5xl text-lg font-extralight text-white text-center sm:text-xl lg:text-2xl">
                        I'm always open to discussing new opportunities, freelance projects, or collaborations. Whether you need a UI/UX designer, web designer, or someone to help bring your digital product to life, I'd love to hear from you. Let's build something great together.
                    </p>
                </div>
                <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=vincentninoapas@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button variant="solidToOutline">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}
