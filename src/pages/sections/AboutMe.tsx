import Button from '../../components/Button';
import vna_cv from "../../assets/pdf/vna_cv.pdf";
import { Link } from 'react-router-dom';

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = vna_cv;
    link.download = 'vna_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="w-full items-center justify-center"
      style={{ background: 'linear-gradient(45deg, #111827 0%, #030712 100%)' }}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen">
          <div
            style={{ width: '256px', height: '256px', backgroundColor: '#D9D9D9' }}
          />
          <div className="flex flex-col gap-6 items-center text-center">
            <h1 className="text-6xl font-bold text-[#008DDE] code">
              About me
            </h1>
            <p className="text-2xl text-white text-center font-extralight">
              I'm a UI/UX Designer with 5+ years of experience crafting intuitive, visually engaging digital products for web platforms.
              Strong focus on usability, clarity, and aligning user needs with business goals. Experienced in end-to-end design—from
              research and user flows to wireframes, high-fidelity UI, and interactive prototypes. Adept at usability testing, iterating
              based on real user feedback, and collaborating closely with product managers, engineers, and marketing teams. Proven
              ability to build and maintain scalable design systems in Figma, ensure smooth design-to-development handoffs, and
              deliver high-quality work with strong ownership, consistency, and attention to detail.
            </p>
          </div>
            <div className="flex gap-6">
                <Link to="/resume">
                  <Button variant="solidToOutline">
                    View Online Resume
                  </Button>
                </Link>
                <Button variant="outline" onClick={handleDownloadResume}>
                  Download Resume
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
