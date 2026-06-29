import { FaEnvelope, FaLock, FaEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate('/cms-admin');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[414px] bg-white p-5 shadow-lg flex flex-col gap-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Login for CMS
        </h1>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="block text-sm text-gray-700">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-none border border-gray-200 bg-gray-50 py-3.5 px-10 pr-4 text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
              </div>
            </label>
            <label className="block text-sm text-gray-700">
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-none border border-gray-200 bg-gray-50 py-3.5 px-10 pr-4 text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
                <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </label>
          </div>
          <button
            type="submit"
            className="cursor-pointer w-full rounded-none bg-[#008DDE] py-3 text-sm font-semibold text-white hover:bg-[#0077C2] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
