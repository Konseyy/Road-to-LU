import React from 'react';

const LandingPage = () => {
  return (
    <section className="landingPage">
      <div className="svgContainer">
        <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="schoolSvg">
            <path id="roof" d="M231 41L329.727 98H132.273L231 41Z" />
            <path id="schoolPath" d="M130.5 98V222.5H331V98M130.5 98L230 41.5L331 98M130.5 98H331" />
            <rect id="pillar2" x="156.5" y="98.5" width="16" height="124" />
            <rect id="pillar1" x="130.5" y="98.5" width="16" height="124" />
            <rect id="pillar4" x="314.5" y="98.5" width="16" height="124" />
            <rect id="pillar3" x="288.5" y="98.5" width="16" height="124" />
          </g>
        </svg>
      </div>

      <div className="landingPageText">
        <h1 className="landingPageHeader">Mans ceļš uz LU</h1>
      </div>
    </section>
  );
};

export default LandingPage;
