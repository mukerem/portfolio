// ScrollToTop.jsx
import { useEffect, useState } from 'react';
export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full 
                  bg-gradient-to-r from-primary-500 to-secondary-600 text-white 
                  flex items-center justify-center shadow-lg transition-all 
                  duration-300 transform hover:-translate-y-1 z-50
                  ${show ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    </button>
  );
}
