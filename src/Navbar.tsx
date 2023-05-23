import React from 'react';
import { sections } from './sectionData';

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <nav className={`${navOpen ? 'active' : ''}`}>
      <div className={`links ${navOpen ? '' : 'hidden'}`}>
        <a onClick={() => setNavOpen(false)} href={`#home`}>
          Home
        </a>
        <a onClick={() => setNavOpen(false)} href={`#timeline`}>
          Timeline
        </a>
        {sections.map((section) => {
          return (
            <a onClick={() => setNavOpen(false)} href={`#${section.id}`}>
              {section.title}
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
