import React, { useRef, useState, useEffect } from 'react';
import '../styles/Testimonials.css';

/* ══════════════════════════════════════════════════════════════
   MAIN SECTION
   ══════════════════════════════════════════════════════════════ */
export default function Testimonials() {
  const viewportRef = useRef(null);           // <div> that scrolls horizontally
  const [active, setActive] = useState(0);    // index of current slide
  const total = testimonials.length;

  /* ------------------------------------------------------------
     scroll helpers
  ------------------------------------------------------------ */
  const slideTo = (idx) => {
    const vp = viewportRef.current;
    if (!vp) return;
    vp.scrollTo({ left: idx * vp.clientWidth, behavior: 'smooth' });
    setActive(idx);
  };
  const prev = () => slideTo((active - 1 + total) % total);
  const next = () => slideTo((active + 1) % total);

  /* ------------------------------------------------------------
     keep indicator in sync when user drags / swipes
  ------------------------------------------------------------ */
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const onScroll = () => {
      const idx = Math.round(vp.scrollLeft / vp.clientWidth);
      setActive(idx);
    };
    vp.addEventListener('scroll', onScroll, { passive: true });
    return () => vp.removeEventListener('scroll', onScroll);
  }, []);

  /* ------------------------------------------------------------
     auto-play  –  every 6.5 seconds
     (paused while cursor is over the slider)
  ------------------------------------------------------------ */
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let paused = false;

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    vp.addEventListener('mouseenter', pause);
    vp.addEventListener('mouseleave', resume);

    const id = setInterval(() => {
      if (!paused) next();
    }, 6500);

    return () => {
      clearInterval(id);
      vp.removeEventListener('mouseenter', pause);
      vp.removeEventListener('mouseleave', resume);
    };
  }, [active]);               // re-create interval after each slide change

  /* ------------------------------------------------------------ */
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* decorative blob */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-3xl opacity-60 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* heading */}
        <Header />

        {/* slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* viewport (scrollable) */}
          <div ref={viewportRef} className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory">
              {testimonials.map((t, i) => (
                <TestimonialCard key={i} {...t} />
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <CircleButton ariaLabel="Previous testimonial" onClick={prev}>
              <ArrowLeftIcon className="w-5 h-5" />
            </CircleButton>

            {/* dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => slideTo(i)}
                  className={`transition-all rounded-full ${
                    active === i
                      ? 'bg-primary-500 w-6 h-3'
                      : 'bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <CircleButton ariaLabel="Next testimonial" onClick={next}>
              <ArrowRightIcon className="w-5 h-5" />
            </CircleButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════
   STATIC DATA
   ══════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    quote:
      'I am writing this letter to wholeheartedly recommend Mukerem for any opportunity or recognition that comes his way. Mukerem is not just a mentor, teacher, and friend, but a true genius whose contributions have left an indelible mark not only on me but also on the entire ASTU community and the broader developer community in our country.',
    name: 'Temkin Mengistu',
    role: 'Senior Software Developer',
    img: './static/temkin-megistu.jpeg',
    link: 'https://www.linkedin.com/in/mukerem/details/recommendations/?detailScreenTabIndex=0',
  },
  {
    quote:
      'I am writing to strongly endorse Mukerem for any opportunity he decides to pursue. Mukerem has continually displayed excellent traits that make him an exceptional individual, both professionally and personally, throughout the time I have known him.',
    name: 'Mebatsion Sahle',
    role: 'Business Analyst · Data Scientist · Full-Stack Developer',
    img: './static/mebatsion-sahle.jpeg',
    link: 'https://www.linkedin.com/in/mukerem/details/recommendations/?detailScreenTabIndex=0',
  },
  {
    quote:
      'I am immensely grateful to recommend Mukerem, whose mentorship and support have been pivotal in my professional development. Having known Mukerem since my early university days, I can attest to his extraordinary intelligence and his profound impact on those around him.',
    name: 'Ahmed Hibet',
    role: 'Software Developer @ Turing',
    img: './static/ahmed-hibet.jpeg',
    link: 'https://www.linkedin.com/in/mukerem/details/recommendations/?detailScreenTabIndex=0',
  },
  {
    quote:
      'I had the privilege of coaching Mukerem Ali in the Ethiopian ICPC. His skills as a competitive programmer were truly exceptional, culminating in the prestigious status of ICPC World-Finalist 2021.',
    name: 'Desta Zerihun',
    role: 'Distributed Systems Engineer · Tech Lead',
    img: './static/desta-zerihun.jpeg',
    link: 'https://www.linkedin.com/in/mukerem/details/recommendations/?detailScreenTabIndex=0',
  },
  {
    quote:
      'Mukerem is a person with passion, commitment, ingenuity, friendship, and more. Beyond his academic excellence he reached the ICPC world finals, led a club, built numerous systems, and supported others with tutorials at every level.',
    name: 'Duguma Yeshitla',
    role: 'Researcher · Data Scientist · Full-Stack Developer',
    img: './static/duguma-yeshitla.jpeg',
    link: 'https://www.linkedin.com/in/mukerem/details/recommendations/?detailScreenTabIndex=0',
  },
];

/* ══════════════════════════════════════════════════════════════
   PRESENTATION PARTIALS
   ══════════════════════════════════════════════════════════════ */
const Header = () => (
  <div className="mb-12 text-center">
    <div className="inline-flex items-center rounded-full text-xs mb-3 px-4 py-1.5 bg-primary-50/50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium">
      FEEDBACK
    </div>
    <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-2">
      Testimonials
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
    </h2>
    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Here’s what people are saying about my work. Find more reviews on&nbsp;
      <a
        href="https://www.linkedin.com/in/mukerem/details/recommendations"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center"
      >
        LinkedIn
        <LinkedInIcon className="w-4 h-4 ml-1" />
      </a>
    </p>
  </div>
);

const TestimonialCard = ({ quote, name, role, img, link }) => (
  <div className="snap-center w-full flex-shrink-0">
    <div className="rounded-lg bg-card text-card-foreground shadow-lg w-full md:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)]">
      <div className="p-8 flex flex-col h-full">
        <div className="text-primary-500/20 dark:text-primary-400/20 mb-4">
          <QuoteIcon className="w-10 h-10" />
        </div>
        <p className="text-gray-600 dark:text-gray-300 italic mb-6 flex-grow text-lg">
          “{quote}”
        </p>
        <div className="flex items-center">
          <img
            src={img}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center ml-1"
            >
              View on LinkedIn
              <LinkedInIcon className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CircleButton = ({ onClick, ariaLabel, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={ariaLabel}
    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
  >
    {children}
  </button>
);

/* ══════════════════════════════════════════════════════════════
   ICONS
   ══════════════════════════════════════════════════════════════ */
const QuoteIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ArrowLeftIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
