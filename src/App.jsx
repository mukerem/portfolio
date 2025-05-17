// src/App.jsx
import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CommunityInvolvement from './components/CommunityInvolvement';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import BackgroundBlobs from './components/BackgroundBlobs';
import ScrollToTop from './components/ScrollToTop';    // ⬅️  NEW
import useInitTheme from './hooks/useInitTheme';

function App() {
  useInitTheme();           // initialise light / dark mode

  return (
    <>
      <BackgroundBlobs />

      {/* site content */}
      <main className="relative min-h-screen">
        <Header />
        <Home />
        <About />
        <TechnicalSkills />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Blog />
        <CommunityInvolvement />
        <ContactUs />
        <Footer />
      </main>

      {/* floating scroll‑to‑top button */}
      <ScrollToTop />        {/* 🆕 mounted once, outside <main> so it overlays everything */}
    </>
  );
}

export default App;
