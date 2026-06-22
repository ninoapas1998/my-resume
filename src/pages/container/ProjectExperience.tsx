import { FaCalendar } from "react-icons/fa";

export default function ProjectExperience() {
  return (
    <div className="w-full flex">
        <div className="width-full rounded-2xl bg-white p-8 md:p-8 shadow-md flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
                Project Experience
            </h1>
            <div className="w-full h-px bg-gray-100 rounded-full"></div>

            {/* 1 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            UI/UX Designer 
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Appointment System for Beauty and Wellness - United States
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            February 2025 - July 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    <li>Collaborated directly with stakeholders to gather requirements, present design concepts, and refine workflows for a multi-branch appointment management platform.</li>
                    <li>Designed role-based dashboards and booking experiences for Admins, Branches, and Appointees to streamline scheduling operations.</li>
                    <li>Created wireframes, user flows, interactive prototypes, and high-fidelity interfaces that improved usability and customer experience.</li>
                    <li>Applied consistent branding, typography, and color systems aligned with the client’s business identity.</li>
                    <li>Worked closely with developers and conducted usability testing to ensure design feasibility and efficient booking workflows.</li>
                </ul> 
            </div>

            {/* 2 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Web Designer/Developer & Designer
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Template-based Websites for Dental & Medical - Los Angeles, California
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            July 2024 - July 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    <li>Developed and maintained responsive dental and medical website pages using HTML, CSS, and PHP.</li>
                    <li>Implemented client-requested content and layout updates while ensuring consistent functionality and responsive performance across devices.</li>
                    <li>Optimized and resized website assets using Adobe Photoshop to improve visual quality and page presentation.</li>
                    <li>Collaborated with QA teams to identify and resolve website issues, reducing design inconsistencies and improving overall site reliability.</li>
                    <li>Managed updates for multiple clinic websites while maintaining brand consistency and timely project delivery.</li>
                </ul> 
            </div>   

            {/* 3 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            UI/UX Designer 
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Healthcare Recruitment & Applicant Tracking System - United States
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            February 2024 - November 2024
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    <li>Led discovery sessions with stakeholders to define recruitment workflows and align platform functionality with business goals.</li>
                    <li>Designed a role-based recruitment system for Applicants, Lawyers, Contractors, and Admins that streamlined document tracking and verification processes.</li>
                    <li>Simplified complex recruitment and legal workflows through user-centered UX/UI solutions that improved usability and operational clarity.</li>
                    <li>Collaborated with developers to define scalable and technically feasible recruitment management features.</li>
                    <li>Conducted user testing and iterative design improvements to deliver a clean, professional, and corporate-standard interface.</li>
                </ul> 
            </div>   

            {/* 4 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            UI/UX Designer 
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Online Learning System - Slovakia
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            February 2023 - April 2024
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    <li>Conducted client discovery meetings to translate business requirements into user-centered web and mobile application designs.</li>
                    <li>Designed a web-based course marketplace and gifting platform with intuitive purchasing and navigation flows.</li>
                    <li>Created a mobile learning application interface that improved accessibility and course engagement for users.</li>
                    <li>Developed branding systems, typography, UI components, and responsive layouts aligned with corporate identity guidelines.</li>
                    <li>Collaborated with developers and conducted usability testing to refine features and ensure implementation feasibility.</li>
                </ul> 
            </div>  
        </div>
    </div>
  );
}