import '../styles/Header.css';

const THEMES = ['light', 'dark'];

const toggleTheme = () => {
  try {
    const current = localStorage.getItem('theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', next);
    document.documentElement.classList.remove(...THEMES);
    document.documentElement.classList.add(next);
    document.documentElement.style.colorScheme = next; // keeps scroll‑bars etc. consistent
  } catch {
    // silent fallback if localStorage not available
  }
};

const Header = () => (
  <header className="py-6 relative">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center group space-x-2"
        >
          <span className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-600">
            TM
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            ['Home', '#home'],
            ['About', '#about'],
            ['Work', '#work'],
            ['Skills', '#skills'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                label === 'Home'
                  ? 'text-primary-500 dark:text-primary-400'
                  : 'hover:text-primary-500 dark:hover:text-primary-400'
              }`}
            >
              {label}
            </a>
          ))}

          {/* Theme toggle (desktop) */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full p-1"
            aria-label="Toggle theme"
          >
            {/* Sun / moon icons swap automatically via `dark:` utilities */}
            <svg
              className="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
            <svg
              className="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <span className="sr-only">Toggle theme</span>
          </button>
        </nav>

        {/* Mobile menu button (hamburger) */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
          onClick={() =>
            document
              .getElementById('mobileMenu')
              .classList.toggle('hidden')
          }
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobileMenu"
        className="md:hidden hidden pt-4 pb-2"
      >
        <div className="flex flex-col space-y-3">
          {['Home', 'About', 'Work', 'Skills', 'Contact'].map(
            (label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={`text-sm font-medium py-2 transition-colors ${
                  label === 'Home'
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                {label}
              </a>
            ),
          )}

          {/* Theme toggle (mobile) */}
          <div className="py-2 flex items-center">
            <span className="text-sm font-medium mr-3">
              Theme
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full p-1"
              aria-label="Toggle theme"
            >
              <svg
                className="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <svg
                className="lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
