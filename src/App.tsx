import { useState } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Sections from './Sections';
import Timeline from './Timeline';
import { languageContext } from './language';

function App() {
  const [language, setLanguage] = useState<'lv' | 'en'>('lv');

  return (
    <languageContext.Provider value={{ language, toggleLanguage: () => setLanguage((l) => (l === 'lv' ? 'en' : 'lv')) }}>
      <Navbar />
      <LandingPage />
      <Timeline />
      <Sections />
    </languageContext.Provider>
  );
}

export default App;
