// src/components/CommunityInvolvement.jsx
import React from 'react';
import '../styles/CommunityInvolvement.css';

const events = [
  {
    type: 'Dev Dialog',
    color: 'purple',
    title: 'AASTU Dev Dialog (GDG)',
    img: './static/aastu-dev-dialog.jpg',
    blurb:
      'Presented on competitive programming, sharing key strategies, challenges, and insights from international experience in the field.',
    cta: 'Event details',
    url: 'https://t.me/DSCAASTU/594',
  },
  {
    type: 'Podcast',
    color: 'blue',
    title: 'Resala Podcast',
    img: './static/resala-podcast-part-1.jpg',
    blurb:
      'Presented as a guest speaker, covering AI, university life, my tutorial journey, career path, technology, and personal experiences.',
    cta: 'Listen to podcast',
    url: 'https://youtu.be/50hMUsZq9qI?feature=shared/',
  },
  {
    type: 'Panel Discussion',
    color: 'green',
    title: 'DevFest Addis Ababa Student Edition',
    img: './static/GDSC-panel-discussion.jpg',
    blurb:
      'I shared insights on breaking into the tech industry, emerging trends, essential skills, and my journey to inspire aspiring professionals.',
    cta: 'Event details',
    url: 'https://t.me/DSCAASTU/620/',
  },
  {
    type: 'Dev Dialog',
    color: 'green',
    title: "AASTU Tech Fest 2024",
    img: './static/dev-fest-2024-2.jpg',
    blurb:
      'I shared my journey from a university club enthusiast to working with top global tech companies, co-founding startup, and contributing to the growth of my local tech community.',
    cta: 'Event details',
    url: 'https://t.me/DSCAASTU/872',
  },
  {
    type: 'Panel Discussion',
    color: 'blue',
    title: "GDSC St. Mary's University",
    img: './static/GDSC-saint-mary-university.jpeg',
    blurb:
      'At the panel, I shared my journey from student to AI engineer and ICPC World Finalist, highlighting key lessons in skill-building, community engagement, and real-world tech impact.',
    cta: 'Event details',
    url: 'https://www.linkedin.com/posts/gdscsmu_yesterday-we-had-a-fantastic-panel-discussion-activity-7197499892766785536--ZZO?utm_source=share&utm_medium=member_desktop&rcm=ACoAACOQKLUBUkrihNz_CJhB-GrT6zcNsE1z1mk',
  },
    {
    type: 'Podcast',
    color: 'purple',
    title: 'Rotract Lewet Club',
    img: './static/podcast-with-dagu.jpg',
    blurb:
      'Presented on the craft of software engineering and the journey from competitive programming to backend development at scale.',
    cta: 'Event details',
    url: 'https://t.me/curiousiTea/1690',
  },
];

const CommunityInvolvement = () => (
  <section id="speaking-engagements" className="py-20 bg-white dark:bg-gray-950">
    <div className="container max-w-6xl px-4 mx-auto">
      {/* Heading */}
      <div className="mb-16 text-center space-y-4">
        <span className="inline-flex items-center border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-3 py-1 rounded-full font-medium">
          COMMUNITY&nbsp;INVOLVEMENT
        </span>
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
          Speaking&nbsp;Engagements
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I enjoy sharing knowledge and connecting with tech communities.&nbsp;Here are some places where I’ve been
          invited to speak.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(({ type, color, title, img, blurb, cta, url }) => (
          <article
            key={title}
            className="rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 text-card-foreground group"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline"
                >
                  {cta}
                </a>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <span
                className={`inline-flex items-center font-medium rounded-full border px-2.5 py-0.5 text-xs bg-${color}-100 text-${color}-700 hover:bg-${color}-200 dark:bg-${color}-900/20 dark:text-${color}-400 transition-colors`}
              >
                {type}
              </span>
              <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
            </div>

            {/* Description */}
            <div className="px-6 pb-6 pt-0">
              <p className="text-sm text-gray-600 dark:text-gray-400">{blurb}</p>
            </div>

            {/* Link */}
            <div className="flex items-center px-6 pb-6 pt-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1 hover:underline"
              >
                {cta}
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Call‑to‑action */}
      <div className="mt-16">
        <div className="rounded-lg max-w-2xl mx-auto shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 text-card-foreground">
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Interested in having me speak at your event?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I’m available for tech conferences, workshops, and podcasts.
            </p>
            <a
              href="mailto:mukeremali112@gmail.com"
              className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <MailIcon className="w-4 h-4" />
              Contact&nbsp;for&nbsp;Speaking
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Icons                                                              */
const ExternalLinkIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default CommunityInvolvement;
