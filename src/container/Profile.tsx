import vn from "../assets/vn.jpg";
import { FaLinkedin, FaBehance, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ProfileCard() {
  return (
<div className="w-full flex">
      <div className="w-[413px] rounded-2xl bg-white p-8 md:p-8 shadow-md">
        
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <img
            src={vn}
            width={160}
            height={160}
            className="rounded-full object-cover border-gray-100 border"
            alt="Picture of the author"
          />
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Vincent Niño N. Apas
          </h1>
          <p className="text-base text-gray-500 font-medium">
            Front-end Developer/UI/UX Designer
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="h-5 w-5 flex-shrink-0 text-[#008DDE]" />
            <span className="text-sm text-gray-800 font-medium">
              Lilo-an, Cebu
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="h-5 w-5 flex-shrink-0 text-[#008DDE]" />
            <span className="text-sm text-gray-800 font-medium">
              09563569479
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="h-5 w-5 flex-shrink-0 text-[#008DDE]" />
            <span className="text-sm text-gray-800 font-medium">
              vincentninoapas@gmail.com
            </span>
          </div>
          <div className="flex gap-2 min-w-0">
            <FaLinkedin className="h-5 w-5 flex-shrink-0 text-[#008DDE]" />
            <a
              href="https://www.linkedin.com/in/vincent-ni%C3%B1o-apas-b8aa20151/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-800 hover:text-blue-600 break-all font-medium "
            >
              https://www.linkedin.com/in/vincent-ni%C3%B1o-apas-b8aa20151/
            </a>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <FaBehance className="h-5 w-5 flex-shrink-0 text-[#008DDE]" />
            <a
              href="https://www.behance.net/vincentnioapas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-800 hover:text-blue-600 break-all font-medium "
            >
              https://www.behance.net/vincentnioapas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}