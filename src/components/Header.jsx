import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/logo.webp';

const Header = () => (
  <header className="py-6 relative">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between">
        {/* Logo (moved right via ml-4) */}
        <a href="#home" className="flex items-center space-x-2 group ml-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 md:w-10 md:h-20 transition-transform group-hover:rotate-12"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Experience', '#experience'],
            ['Skills', '#skills'],
            ['Projects', '#project'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium transition-colors hover:text-primary-500 dark:hover:text-primary-400"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400"
          onClick={() =>
            document.getElementById('mobileMenu')?.classList.toggle('hidden')
          }
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="hidden pt-4 pb-2 md:hidden">
        <div className="flex flex-col space-y-3">
          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Experience', '#experience'],
            ['Skills', '#skills'],
            ['Projects', '#project'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="py-2 text-sm font-medium transition-colors hover:text-primary-500 dark:hover:text-primary-400"
              onClick={() =>
                document.getElementById('mobileMenu')?.classList.add('hidden')
              }
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
