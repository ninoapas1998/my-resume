import Hero from './sections/Hero';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function LandingPage() {
  return (
    <div className="">
        <Hero />
        <AboutMe />
        <Skills />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  );
}
