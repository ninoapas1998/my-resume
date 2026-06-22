import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Profile from './container/Profile';
import Summary from './container/Summary';
import Skills from './container/Skills';
import TechStack from './container/TechStack';
import Hobbies from './container/Hobbies';
import WorkExperience from './container/WorkExperience';
import Education from './container/Education';
import ProjectExperience from './container/ProjectExperience';

export default function ResumeDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="w-full fixed top-0 left-0 py-4 px-6 bg-white shadow-md z-50">
        <Link to="/" className="text-[#008DDE] hover:text-blue-800 font-medium">
          ← Back to Home
        </Link>
      </div>
      <div className="pt-20 pb-8 mx-auto container max-w-screen-xl w-full flex flex-row gap-5">
        <div className="width-100% border-gray-300 flex flex-col gap-5">
          <Profile />
          <Skills />
          <TechStack />
          <Hobbies />
        </div>
        <div className="width-100% border-gray-300 flex flex-col gap-5">
          <Summary />
          <Education />
          <WorkExperience />
          <ProjectExperience />
        </div>
      </div>
    </div>
  );
}
