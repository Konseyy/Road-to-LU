import React from 'react';
import { sections } from './sectionData';
import { languageContext } from './language';
import AnimatedSvg from './AnimatedSvg';

const Sections = () => {
  const { language } = React.useContext(languageContext);
  return (
    <>
      {sections.map((section, idx) => {
        return (
          <section id={section.id} key={idx} className="mainSection">
            <AnimatedSvg className="sectionCoverPhoto">{section.image}</AnimatedSvg>
            <section className="sectionText">
              <h1 className="sectionHeader">{section.title[language]}</h1>
              <div className="sectionContent">{section.content[language]}</div>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default Sections;
