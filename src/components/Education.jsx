// src/components/Education.jsx
import React from 'react';
import '../styles/Education.css';

const Education = () => (
  <section id="education" className="py-24 relative overflow-hidden">
    {/* ─── decorative blobs ────────────────────────────────────────── */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-100 dark:opacity-0 rounded-full blur-3xl opacity-60 -translate-x-1/4" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-900/20 opacity-0 dark:opacity-100 rounded-full blur-3xl -translate-x-1/4" />
    </div>

    <div className="container mx-auto px-6">
      {/* ─── heading ──────────────────────────────────────────────── */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block relative">
          Education
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full" />
        </h2>
      </div>

      {/* ─── timeline wrapper ─────────────────────────────────────── */}
      <div className="relative">
        {/* centre line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

        <div className="space-y-12">
          {/* ═════════════ MSc – ASTU ═════════════ */}
          <TimelineEntry
            side="right"
            color="primary"
            period="Jan 2021 – Jun 2022"
            title="MSc — Computer Science &amp; Engineering (GPA 3.91)"
            org="Adama Science &amp; Technology University"
            orgLink="https://astu.edu.et/"
            bullets={[
              'Specialised in Data Science; coursework in machine-learning, big-data and statistical modelling.',
              'Thesis: Conducted my thesis on Geez Digit Recognition using Deep Learning, where I collected and prepared the dataset, developed the model, and successfully published the work in Hindawi (2022). The dataset is now publicly available.',
              'Led a team that ranked 3rd in a continent-wide Zindi Africa data-science competition.',
            ]}
          />

          {/* ═════════════ BSc Double Major – ASTU ═════════════ */}
          <TimelineEntry
            side="left"
            color="secondary"
            period="Sep 2015 – Dec 2020"
            title="BSc Double Major — CSE &amp; ECE (GPA 3.93)"
            org="Adama Science &amp; Technology University"
            orgLink="https://astu.edu.et/"
            bullets={[
              'Blended rigorous Computer-Science theory with solid Electronics fundamentals.',
              'Active member & later lead of the CSEC club – delivered real-world projects and weekly algorithm jams.',
            ]}
          />

          {/* ═════════════ A2SV training ═════════════ */}
          <TimelineEntry
            side="right"
            color="primary"
            period="Feb 2023 – Nov 2023"
            title="Data Structures &amp; Algorithms Fellowship"
            org="Africa to Silicon Valley (A2SV)"
            orgLink="https://a2sv.org/"
            bullets={[
              'Intensive 9-month problem-solving boot-camp (Python).',
              'Solved 500 + LeetCode / Codeforces problems; peer-mentored newcomers.',
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ────────────────────────────────────────────────────────────────
   helper
──────────────────────────────────────────────────────────────── */
function TimelineEntry({ side, color, period, title, org, orgLink, bullets }) {
  const titleCol =
    side === 'right'
      ? 'mb-8 md:mb-0 md:order-2 md:pl-10'
      : 'mb-8 md:mb-0 md:text-right md:pr-10';

  const descCol =
    side === 'right'
      ? 'md:order-1 md:pr-10'
      : 'md:pl-10';

  return (
    <div className="relative">
      {/* dot on the centre line */}
      <div
        className={`hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-${color}-500 border-4 border-white dark:border-gray-900 -translate-x-1/2 z-10`}
      />

      <div className="md:grid md:grid-cols-2 gap-8 items-start">
        {/* meta */}
        <div className={titleCol}>
          <span
            className={`inline-block px-3 py-1 bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400 rounded-md text-sm font-medium mb-2`}
          >
            {period}
          </span>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div
            className={`flex items-center text-gray-500 dark:text-gray-400 ${
              side === 'left' ? 'md:justify-end' : ''
            } mb-4`}
          >
            <img
              src="./static/university-svgrepo-com.svg"
              alt=""
              className="mr-1"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
            <a
              href={orgLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`mx-1 hover:underline text-${color}-600 dark:text-${color}-400`}
            >
              {org}
            </a>
          </div>
        </div>

        {/* description */}
        <div
          className={`${descCol} bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition`}
        >
          <ul className="space-y-2 text-gray-500 dark:text-gray-300">
            {bullets.map((b) => (
              <li key={b} className="flex">
                <span className={`mr-2 text-${color}-500`}>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
