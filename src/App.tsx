import { useState } from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Sections from './Sections';
import Timeline from './Timeline';

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Timeline />
      <Sections />
    </>
  );
}

export default App;
