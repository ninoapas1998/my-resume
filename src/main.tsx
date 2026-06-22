import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ResumeDetail from './pages/ResumeDetail';
import Login from './pages/Login';
import CmsAdminPage from './pages/CmsAdminPage';
import './pages/container/main.css';
import vnImage from './assets/vn.jpg';

document.title = 'VNA';

let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
if (!favicon) {
  favicon = document.createElement('link');
  favicon.rel = 'icon';
  document.head.appendChild(favicon);
}
favicon.href = vnImage;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<ResumeDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cms-admin" element={<CmsAdminPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);