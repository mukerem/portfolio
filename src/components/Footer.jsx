// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/mukerem',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a5.9 5.9 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5a5 5 0 0 0-.85 5.5V22" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mukerem/',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Telegram',
    href: 'https://t.me/rapi8',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.5.5 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@mukeremali5346',
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17Z" />
        <path d="m10 15 5-3-5-3Z" />
      </svg>
    ),
  },
];

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Education', '#education'],
  ['Projects', '#portfolio'],
  ['Testimonials', '#testimonials'],
  ['Blogs', '#blog'],
  ['Speaking Engagements', '#speaking-engagements'],
  ['Contact', '#contact'],
];

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 pt-16 pb-8 relative overflow-hidden">
    {/* decorative top border lines */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-transparent dark:via-gray-700 to-transparent" />
    </div>

    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center">
        {/* name & title */}
        <div className="mb-8 text-center">
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-600 block">
            Mukere Ali
          </span>
          <span className="text-gray-600 dark:text-gray-400 text-sm">AI Engineer & Senior Backend Developer</span>
        </div>

        {/* nav */}
        <nav className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map(([label, hash]) => (
              <li key={label}>
                <a
                  href={hash}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* social icons */}
        <div className="flex justify-center space-x-5 mb-10">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* copyright */}
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm">© 2025 All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
