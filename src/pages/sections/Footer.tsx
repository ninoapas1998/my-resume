import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div
      className="w-full items-center justify-center py-12"
      style={{ background: '#030712' }}
    >
        <div className="mx-auto max-w-screen-xl flex flex-col gap-6 items-center justify-center">
            <div className="flex gap-20 items-center justify-center">
                <Link to="https://www.linkedin.com/in/vincent-ni%C3%B1o-apas-b8aa20151/" className="text-3xl font-medium text-white" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </Link>
                <Link to="https://www.behance.net/vincentnioapas" className="text-3xl font-medium text-white" target="_blank" rel="noopener noreferrer">
                    Behance
                </Link>
                <Link to="https://github.com/ninoapas1998" className="text-3xl font-medium text-white" target="_blank" rel="noopener noreferrer">
                    Github
                </Link>
                <Link to="/" className="text-3xl font-medium text-white" target="_blank" rel="noopener noreferrer">
                    Website
                </Link>
            </div>
            <p className="text-2xl font-light text-[#52525B]">
                ©VNA @VA Design Solutions. All rights reserved.
            </p>
        </div>
    </div>
  );
}
