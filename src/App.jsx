// src/App.jsx
import React from 'react';
import './App.css';

// SEO
import { Helmet } from 'react-helmet-async';

// Components
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
import ScrollToTop from './components/ScrollToTop';
import useInitTheme from './hooks/useInitTheme';

function App() {
  useInitTheme();

  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <title>Mukerem Ali – Backend Developer & AI Engineer</title>
        <meta name="description" content="Mukerem Ali's personal portfolio showcasing backend skills, AI projects, and mentorship contributions." />
        <meta name="keywords" content="Mukerem Ali, backend developer, AI engineer, Python, Django, React, ICPC, mentorship" />
        <meta name="author" content="Mukerem Ali" />
        <meta property="og:title" content="Mukerem Ali – Backend Developer & AI Engineer" />
        <meta property="og:description" content="Explore Mukerem's projects, skills, and community contributions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mukerem.com" />
        <meta property="og:image" content="https://mukerem.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mukerem Ali – Backend Developer & AI Engineer" />
        <meta name="twitter:description" content="Explore Mukerem's skills in backend engineering and AI." />
        <meta name="twitter:image" content="https://mukerem.com/preview.jpg" />
      </Helmet>

      <BackgroundBlobs />

      {/* Site content */}
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

      {/* Scroll-to-top button */}
      <ScrollToTop />
    </>
  );
}

export default App;
