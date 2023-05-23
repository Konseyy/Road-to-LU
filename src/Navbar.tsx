import React, { useContext } from 'react';
import { sections } from './sectionData';
import { languageContext, translations } from './language';

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const { language, toggleLanguage } = useContext(languageContext);
  return (
    <nav className={`${navOpen ? 'active' : ''}`}>
      <button className="languagePicker" onClick={() => toggleLanguage()}>
        {language}
      </button>
      <div className={`links ${navOpen ? '' : 'hidden'}`}>
        <a onClick={() => setNavOpen(false)} href={`#home`}>
          {translations[language].home}
        </a>
        <a onClick={() => setNavOpen(false)} href={`#timeline`}>
          {translations[language].timeline}
        </a>
        {sections.map((section) => {
          return (
            <a onClick={() => setNavOpen(false)} href={`#${section.id}`}>
              {section.title[language]}
            </a>
          );
        })}
      </div>
      <div className={`hamburger`} onClick={() => setNavOpen((o) => !o)}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
