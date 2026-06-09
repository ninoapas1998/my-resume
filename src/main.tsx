import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './container/Profile';
import './container/main.css';
import Summary from './container/Summary';
import Skills from './container/Skills';
import TechStack from './container/TechStack';
import Hobbies from './container/Hobbies';
import WorkExperience from './container/WorkExperience';
import Education from './container/Education';
import vnImage from './assets/vn.jpg';

document.title = 'My Resume';

let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
if (!favicon) {
  favicon = document.createElement('link');
  favicon.rel = 'icon';
  document.head.appendChild(favicon);
}
favicon.href = vnImage;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="py-8 mx-auto container max-w-screen-xl w-full bg-gray-100 flex flex-row gap-5">
        <div className="width-100%  border-gray-300 flex flex-col gap-5">
          <Profile />
          <Skills />
          <TechStack />
          <Hobbies />
        </div>
        <div className="width-100%  border-gray-300 flex flex-col gap-5">
          <Summary />
          <WorkExperience />
          <Education />
        </div>
    </div>
  </React.StrictMode>
);