import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div
      className="w-full items-center justify-center py-12"
      style={{ background: '#030712' }}
    >
        <div className="mx-auto max-w-screen-xl flex flex-col gap-6 items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-6 items-center justify-center sm:gap-10 lg:gap-20">
                <Link to="https://www.linkedin.com/in/vincent-ni%C3%B1o-apas-b8aa20151/" className="text-xl font-medium text-white sm:text-2xl lg:text-3xl" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </Link>
                <Link to="https://www.behance.net/vincentnioapas" className="text-xl font-medium text-white sm:text-2xl lg:text-3xl" target="_blank" rel="noopener noreferrer">
                    Behance
                </Link>
                <Link to="https://github.com/ninoapas1998" className="text-xl font-medium text-white sm:text-2xl lg:text-3xl" target="_blank" rel="noopener noreferrer">
                    Github
                </Link>
                <Link to="/" className="text-xl font-medium text-white sm:text-2xl lg:text-3xl" target="_blank" rel="noopener noreferrer">
                    Website
                </Link>
            </div>
            <p className="text-center text-base font-light text-[#52525B] sm:text-xl lg:text-2xl">
                ©VNA @VA Design Solutions. All rights reserved.
            </p>
        </div>
    </div>
  );
}
