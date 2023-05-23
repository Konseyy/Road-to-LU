import React, { useContext, useEffect } from 'react';
import { languageContext, translations } from './language';

const LandingPage = () => {
  const svgRef = React.useRef<SVGSVGElement>(null);
  const [svgVisible, setSvgVisible] = React.useState(false);
  const { language } = useContext(languageContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.every((entry) => entry.isIntersecting)) {
          if (svgVisible) return;
          setSvgVisible(true);
        } else {
          if (!svgVisible) return;
          setSvgVisible(false);
        }
      },
      {
        threshold: 1,
      }
    );
    observer.observe(svgRef.current!);
    return () => {
      observer.disconnect();
    };
  });
  return (
    <section id="home" className="landingPage">
      <div className="svgContainer">
        <svg
          ref={svgRef}
          className={svgVisible ? 'visible' : 'hidden'}
          viewBox="0 0 460 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="schoolSvg">
            <path id="roof" d="M231 41L329.727 98H132.273L231 41Z" />
            <path id="schoolPath" d="M130.5 98V222.5H331V98M130.5 98L230 41.5L331 98M130.5 98H331" />
            <rect id="pillar2" x="156.5" y="98" width="16" height="124.5" />
            <rect id="pillar1" x="130.5" y="98" width="16" height="124.5" />
            <rect id="pillar4" x="314.5" y="98" width="16" height="124.5" />
            <rect id="pillar3" x="288.5" y="98" width="16" height="124.5" />
          </g>
        </svg>
      </div>

      <div className="landingPageText">
        <h1 className="landingPageHeader">{translations[language].road_to_lu}</h1>
      </div>
    </section>
  );
};

export default LandingPage;
