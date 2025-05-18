import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <section id="home" className="h-screen relative pt-12 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        {/* ─────────────────── Avatar ─────────────────── */}
        <div className="lg:w-5/12 mb-10 lg:mb-0 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-800/40 dark:to-secondary-800/40 blur-md -translate-x-2 translate-y-2" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white dark:border-gray-900">
              <img
                src="/static/mukerem-professional.webp"
                alt="Mukerem Ali"
                className="object-cover w-full h-full rounded-full"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ─────────────────── Intro text ─────────────────── */}
        <div className="lg:w-7/12 lg:pl-12">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center justify-center lg:justify-start px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              👋 Hello, I’m
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-600">
                Mukerem Ali
              </span>
            </h1>
            <h2 class="text-xl md:text-2xl text-gray-500 dark:text-gray-400">
              Human Feedback Expert for LLMs &amp; Senior Backend Developer
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              I specialize in <strong className="text-primary-600 dark:text-primary-400">RLHF</strong> with 3 years of LLM evaluation. I architect scalable <strong className="text-primary-600 dark:text-primary-400">backend systems</strong> with 5 years of experience, powered by the problem‑solving rigor of an <strong className="text-primary-600 dark:text-primary-400">ICPC World‑Finalist</strong>.
            </p>

            {/* ─────── Call‑to‑action buttons ─────── */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-10 px-8 py-3 w-full sm:w-auto text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/110yjfSbYBy6J_s6byPje1ryzPcVnN82E/view?usp=sharing"
                className="inline-flex items-center justify-center h-10 px-8 py-3 w-full sm:w-auto text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            {/* ─────── Social icons ─────── */}
            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-5">
              <a
                aria-label="GitHub"
                href="https://github.com/mukerem"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="lucide lucide-github h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.56.7-1 1.5-1 3v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/mukerem"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="lucide lucide-linkedin h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                aria-label="Codeforces"
                href="https://codeforces.com/profile/mukeremali"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/static/codeforces-icon.svg" alt="Codeforces" className="h-6 w-6" />
              </a>

              <a
                aria-label="Telegram"
                href="https://t.me/rapi"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="lucide lucide-send h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 2 11 13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ─────── scroll‑down cue ─────── */}
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block">
      <button className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
        <svg className="h-8 w-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </button>
    </div>
  </section>
);

export default Home;
