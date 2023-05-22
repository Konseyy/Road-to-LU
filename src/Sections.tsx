import React from 'react';
import { sections } from './sectionData';

const Sections = () => {
  return (
    <>
      {sections.map((section, idx) => {
        return (
          <section id={section.id} key={idx} className="mainSection">
            <img className="sectionCoverPhoto" src={section.image} />
            <section className="sectionText">
              <h1 className="sectionHeader">{section.title}</h1>
              <div className="sectionContent">{section.content}</div>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default Sections;
