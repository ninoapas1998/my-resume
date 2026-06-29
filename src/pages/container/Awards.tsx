import { FaCalendar } from "react-icons/fa";

export default function Awards() {
  return (
    <div className="w-full flex">
        <div className="w-full rounded-2xl bg-white p-5 sm:p-8 shadow-md flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
                Awards and Recognition
            </h1>
            <div className="w-full h-px bg-gray-100 rounded-full"></div>

            {/* 1 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Lean Six Sigma White Belt Certification
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Six Sigma PH · MEM-R7-73uGd-gI6D
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            December 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    Certified in Lean Six Sigma White Belt, demonstrating foundational knowledge of process improvement methodologies and tools to enhance efficiency and quality in various industries.
                </ul> 
            </div>

            {/* 2 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Social Media Manager & Graphic Designing Online Masterclass
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Sync2VA
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            December 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    A comprehensive online masterclass designed to train individuals in social media management. Covers a full spectrum of
                    skills including:
                    <li><strong>Content Creation:</strong> Graphic design, video editing, caption writing, and visual content development</li>
                    <li><strong>Strategy & Planning:</strong> Content planning, social media audits, branding, and identity</li>
                    <li><strong>Optimization & Analytics:</strong> Performance tracking, analytics, and platform optimization</li>
                    <li><strong>Community Management:</strong> Engagement strategies, community building, and platform-specific management</li>
                    The program equips learners with both creative and analytical skills needed to manage, grow, and optimize social media
                    presence effectively.
                </ul> 
            </div>   

            {/* 3 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Open House Workshop 
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Zuitt - Coding Bootcamp
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            December 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    Participated in an open house workshop focused on web development fundamentals, gaining hands-on experience with:
                    <li>Version Control: Git</li>
                    <li>Web Development: HTML and CSS</li>
                </ul> 
            </div>   

            {/* 4 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Participant for Google DevFest 
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        Google DevFest
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            December 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    <li><strong>Vibe Coding</strong> – Web or app development using Vibe framework</li>
                    <li><strong>Firebase</strong> – Backend services, database, and authentication integration</li>
                    <li><strong>Python</strong> – General-purpose programming for applications, scripting, and problem-solving</li>
                </ul> 
            </div>  

            {/* 5 */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Virtual Assistant Training
                        </h1>
                    <p className="text-base text-gray-800 font-medium">
                        LimitBreak
                    </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCalendar className="h-5 w-5 text-[#008DDE]" />
                        <span className="text-sm text-gray-500 font-medium">
                            October 2025
                        </span>
                    </div>
                </div>
                <ul className="text-sm text-gray-800 font-medium list-disc list-inside">
                    <li><strong>Automation & Productivity:</strong> Email management, bookkeeping, office assistant tasks, and personal assistance automation</li>
                    <li><strong>Client & CRM Management:</strong> CRM handling, client follow-ups, and workflow optimization</li>
                    <li><strong>Research & Development:</strong> Conducting research, process improvement, and system development</li>
                </ul> 
            </div>  

        </div>
    </div>
  );
}