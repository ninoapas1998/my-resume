import { Calendar } from "lucide-react";

export default function Education() {
  return (
    <div className="w-full flex">
        <div className="width-full rounded-2xl bg-white p-8 md:p-8 shadow-md flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
                Education
            </h1>
            <div className="w-full h-px bg-gray-100 rounded-full"></div>

            {/* MUVR */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800">
                            Bachelor of Science in Information Technology
                        </h1>
                        <p className="text-base text-gray-800 font-medium">
                            ACLC College of Mandaue - M. C. Briones St, Mandaue City, 6014
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-gray-500" />
                        <span className="text-sm text-gray-500 font-medium">
                            June 2015 - June 2019
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-800 font-medium">
                    Proficient in software development and IT solutions with hands-on experience in C, C++, Java, and C# programming.
                    Skilled in object-oriented programming, web development (PHP), and database integration. Experienced in software
                    testing using Unified Functional Testing (UFT) and ALM, as well as content creation and graphic design for digital projects.
                    Adept at applying technical knowledge to real-world applications, problem-solving, and collaborative projects.
                </p>
            </div>
        </div>        
    </div>
  );
}