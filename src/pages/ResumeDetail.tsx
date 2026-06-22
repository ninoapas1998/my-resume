import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Profile from './container/Profile';
import Summary from './container/Summary';
import Skills from './container/Skills';
import TechStack from './container/TechStack';
import Hobbies from './container/Hobbies';
import WorkExperience from './container/WorkExperience';
import Education from './container/Education';

export default function ResumeDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="py-4 px-6 bg-white shadow">
        <Link to="/" className="text-[#008DDE] hover:text-blue-800 font-medium">
          ← Back to Home
        </Link>
      </div>
      <div className="py-8 mx-auto container max-w-screen-xl w-full flex flex-row gap-5">
        <div className="width-100% border-gray-300 flex flex-col gap-5">
          <Profile />
          <Skills />
          <TechStack />
          <Hobbies />
        </div>
        <div className="width-100% border-gray-300 flex flex-col gap-5">
          <Summary />
          <WorkExperience />
          <Education />
        </div>
      </div>
    </div>
  );
}
