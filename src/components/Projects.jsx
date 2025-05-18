import React, { useState } from 'react';
import '../styles/Projects.css';

const tabs = ['All', 'Web', 'AI/ML', 'Open Source', 'Desktop'];

/* ════════════════════════════════════════
   1  · PROJECT DATA  (priority ↓ bottom)
   ════════════════════════════════════════ */

   const PROJECTS = [
  /* ――――――― LIVE PRODUCTS ――――――――― */
  {
    title: 'Seleda Classified',
    tag: 'Backend',
    img: './static/familysooq2.png',
    client: 'Toptech IT Solutions',
    short: 'A modern Ethiopian marketplace platform that enables buyers and sellers to easily trade goods and services with integrated local payments and real-time communication.',
    long: `
Seleda, formerly known as FamilySooq, is a modern, user-friendly online marketplace 
tailored for the Ethiopian market, enabling wholesalers, retailers, and individual 
users to trade goods and services with ease. The system was designed with
seamless integration of local payment gateways such as TeleBirr and Amole,
enabling users to make transactions effortlessly. To enhance user interaction,
the platform also includes SMS and messaging integrations, allowing buyers and
sellers to communicate directly about products. The backend was developed
using Django and Django REST Framework, with PostgreSQL as the primary database.
Redis was integrated for high-performance caching, and Celery was used for
background task management and scheduling. The frontend was built with React,
offering a dynamic and responsive user interface. The entire stack was
containerized using Docker, ensuring scalability and efficient service orchestration.`,
    tech: ['Django RestFramework', 'PostgreSQL', 'React', 'Docker', 'TeleBirr API', 'Redis', 'Celery'],
    link: 'https://seleda.et/',
    category: 'Web',
    priority: 1,
  },
  {
    title: 'Afri-Merkato Wholesale',
    tag: 'E-commerce',
    img: './static/afrimerkato.png',
    client: 'Afri-Merkato LLC',
    short: 'B2B online platform that connects manufacturers, distributors, wholesalers, and retailers to trade and network efficiently in one place.',
    long: `
It is an online sales and networking platform that brings together manufacturers,
distributors, wholesalers, and retailers to exchange goods and connect in one place.
By offering a dedicated social platform for B2B interactions, it eliminates the
inefficiencies of traditional wholesale methods, making it easier for businesses to find
and collaborate with their ideal partners.`,
    tech: ['Javascript', 'CSS', 'PostgreSQL'],
    link: 'https://afrimerkato.com/',
    category: 'web',
    priority: 4,
  },
  {
    title: 'Andalus Charity Website',
    tag: 'Web App',
    img: './static/andaluscharity.png',
    client: 'Andalus Charity',
    short: 'Fund-raising & volunteer portal for orphan support.',
    long: `
React front-end and FastAPI back-end that manages donors, volunteers, cases and
transparent progress tracking. Added PayPal payment gateway and an admin
dashboard for mentors and volunteers.`,
    tech: ['React', 'FastAPI', 'Paypal', 'TailwindCSS'],
    link: 'https://andaluscharity.org/',
    category: 'Web',
    priority: 5,
  },

  /* ――――――― PYPI PACKAGES ――――――――― */
  {
    title: 'telebirrWeb',
    tag: 'Python Package',
    img: './static/telebirrweb.png',
    client: 'Open-source',
    short: 'Python wrapper for TeleBirr Web API.',
    long: `
Provides easy server-side integration with Ethio-Telecom’s payment API.
Used by several Ethiopian start-ups in production.`,
    tech: ['Python', 'PyPI', 'TeleBirr API'],
    link: 'https://pypi.org/project/telebirrweb/',
    category: 'Open Source',
    priority: 6,
  },
  {
    title: 'ethioCalendar',
    tag: 'Python Package',
    img: './static/ethiocalendar.png',
    client: 'Open-source',
    short: 'A Python package for handling Ethiopian calendar functionalities.',
    long: `
Pure-Python library for Ethiopian calendar maths — leap-year rules, date
arithmetic, localisation strings. Powers calendar widgets in multiple apps.`,
    tech: ['Python', 'PyPI'],
    link: 'https://pypi.org/project/ethiocalendar/',
    category: 'Open Source',
    priority: 7,
  },
  {
    title: 'cs1Andalus',
    tag: 'Python Package',
    img: './static/cs1andalus.png',
    client: 'University project',
    short: 'CS1 graphical modules for education for Window and Linux in Python 3 and Python 2.',
    long: `
A set of reusable, turtle-style graphical modules designed for introductory computer
science courses at ASTU. These modules provide a simple and intuitive way to teach
programming concepts through graphics in both Python 2 and Python 3, and are compatible
with Windows and Linux. The package is published on PyPI and has been actively used
in ASTU’s internal lab sessions to support hands-on learning for beginner programmers.`,
    tech: ['Python', 'Graphics'],
    link: 'https://pypi.org/project/cs1andalus/',
    category: 'Open Source',
    priority: 11,
  },

  /* ――――――― BACKEND / API ――――――――― */
  {
    title: 'Andalus Competitive Programming Online Site and Judge',
    tag: 'Backend',
    img: './static/andalus-judge.png',
    client: 'ASTU-CSEC',
    short: 'A competitive programming platform developed to train students for ICPC by allowing automated code submission, evaluation, and contest hosting.',
    long: `
A full-fledged online platform for competitive programming, designed to support students
preparing for the ICPC (International Collegiate Programming Contest). Hosted by
Adama Science and Technology University, it allows users to submit solutions to
programming problems and have them automatically evaluated against test cases.
The platform regularly hosts contests, tracks participant ratings, and supports
multiple programming languages including Python, C++, C, and Java. It plays a key
role in enhancing problem-solving skills and provides a structured environment for algorithmic training.

The system was built with a robust back-end architecture capable of handling over 2 000
simultaneous users. It includes a Redis-based caching system, a Celery-powered task queue,
and uses Flask for efficient orchestration. The back-end was developed with Django,
PostgreSQL for data storage and C++ (via libseccomp) for secure code execution.
The front-end is built with HTML, CSS, JS, and Bootstrap. The system is actively used for
training at ASTU and is being scaled to support broader use across universities.`,
    tech: ['Python', 'Django-REST', 'Redis', 'PostgreSQL', 'Flask', 'Celery'],
    link: 'https://github.com/mukerem/Andalus',
    category: 'Web',
    priority: 2,
  },
  {
    title: 'SocialNetwork API',
    tag: 'Backend',
    img: './static/socialnetwork.jpeg',
    client: 'Freelance',
    short: 'A RESTful social network API with an autonomous bot to simulate user activity and test system behavior.',
    long: `
A simple social-network API for a freelance client using Django and Django
REST Framework, supporting core features like user registration, posting, and interactions.
To demonstrate and test the API, I implemented a Python-based bot that reads a configuration
file (YAML) to simulate realistic platform usage. The bot registers a specified number of
users, logs them in, and generates a random number of posts per user — up to a defined limit —
based on the configuration. This setup was used to validate the API’s performance and functionality.
Technologies used include Python, Django, DRF, PostgreSQL, Docker, Docker Compose, and Postman.`,
    tech: ['Python', 'Django-REST', 'Postman', 'PostgreSQL'],
    link: 'https://github.com/mukerem/SocialNetwork',
    category: 'Web',
    priority: 8,
  },
  {
    title: 'Course Audit',
    tag: 'Web Tool',
    img: './static/courseaudit.png',
    client: 'ASTU CSE',
    short: 'Credit-hour tracker for ASTU CSE 2020 cohort.',
    long: `
Course Audit is an online automated program for calculating the total credit hour of
courses taken and what courses are left from which semester for 2020 Adama Science
and Technology University Computer Science and Engineering Department students.`,
    tech: ['Django', 'Bootstrap', 'AJAX'],
    link: 'https://github.com/mukerem/courseaudit',
    category: 'Web',
    priority: 9,
  },

  /* ――――――― Desktop App ――――――――― */
  {
    title: 'Calendar Conversion',
    tag: 'Java App',
    img: './static/calendarconversion.png',
    client: 'University Project',
    short: 'GUI app converting Ethiopian ⇆ Gregorian ⇆ Hijri.',
    long: `
This project features a Java Swing-based interface that allows users to convert between Ethiopian,
Gregorian, and Julian calendars, while also displaying the calendar for any selected month and year.
It includes localization support for multiple languages, enhancing usability across different regions.
At its core, the system integrates unit-tested algorithms for Julian Day Number conversion, enabling
accurate day-of-week calculations and date alignment across calendar systems. Additionally, the tool
offers printable timetable views, making it useful for academic or scheduling purposes.`,
    tech: ['Java', 'Swing', 'JUnit'],
    link: 'https://github.com/mukerem/CalendarConversion',
    category: 'Desktop',
    priority: 13,
  },

  /* ――――――― ML / AI ――――――――― */
  {
    title: 'Amharic Digit Recognition',
    tag: 'CNN',
    img: './static/amharicdigit.jpeg',
    client: 'Open-source',
    short: 'Handwritten Geʽez digit recognition using a CNN trained on a custom 50K-sample dataset.',
    long: `
Developed a deep-learning model using Convolutional Neural Networks (CNNs) to recognize
handwritten Geʽez (Amharic) digits, trained on a custom dataset of 50 000 samples
collected from diverse individuals. The model was designed to handle variations in
handwriting styles and was evaluated for accuracy and robustness. The results demonstrated
strong accuracy and robustness, and the work was published in a peer-reviewed journal:
https://doi.org/10.1155/2022/8515810. A Telegram bot was later integrated as a demo interface
for testing the model in real-world use cases.`,
    tech: ['Deep Learning', 'CNN', 'TensorFlow', 'Telegram Bot'],
    link: 'https://github.com/mukerem/AmharicHandwrittenDigitRecognitionCNN',
    category: 'AI/ML',
    priority: 3,
  },
  {
    title: 'ASTU Chatbot',
    tag: 'NLP',
    img: './static/astuchatbot.jpeg',
    client: 'iCog-Labs',
    short: 'Chat bot answering FAQs about ASTU.',
    long: `
The chatbot provides basic information about Adama Science and Technology University
and can interact with users and supply that information when asked.`,
    tech: ['Chat Script'],
    link: 'https://github.com/mukerem/ASTUChatBot',
    category: 'AI/ML',
    priority: 12,
  },
  {
    title: 'Student Performance Prediction',
    tag: 'ML',
    img: './static/studentperf.jpeg',
    client: 'Research',
    short: 'ML model to predict department choice & GPA.',
    long: `
A student-performance and field-prediction system designed to collect and analyze
comprehensive data from ASTU students, covering educational background, family background,
socio-economic status, home environment, and demographic information. The system uses these
20 features to build a predictive model that suggests the most suitable department for
each student. This helps students make informed decisions about their academic paths based
on both their performance and personal context.`,
    tech: ['Data Analysis', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    link: 'https://github.com/mukerem/student-performance-prediction',
    category: 'AI/ML',
    priority: 10,
  },
];

/* ════════════════════════════════════════
   2  · MAIN SECTION
   ════════════════════════════════════════ */
export default function Projects() {
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const ordered = [...PROJECTS].sort((a, b) => a.priority - b.priority);

  const filtered = activeTab === 'All'
  ? ordered
  : ordered.filter(p => p.category === activeTab);

  return (
    <section id="project" className="py-20 relative overflow-hidden">
      {/* decorative blob */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-100/60 dark:bg-primary-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <Header />

        <ProjectTab tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab}/>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} project={p} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

/* ════════════════════════════════════════
   3  · SUB-COMPONENTS
   ════════════════════════════════════════ */
function Header() {
  return (
    <header className="text-center mb-12">
      <span className="inline-flex items-center px-4 py-1.5 mb-3 text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
        MY WORK
      </span>
      <h2 className="text-3xl md:text-4xl font-bold inline-block relative pb-2">
        Latest Projects
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500" />
      </h2>
    </header>
  );
}

function ProjectTab({tabs, setActiveTab, activeTab}){
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {tabs.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition 
            ${activeTab === cat 
              ? 'bg-blue-600 text-white border-primary-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  const { title, tag, img, short, link } = project;

  return (
    <article className="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition hover:shadow-md hover:-translate-y-1 group">
      {/* image */}
      <figure className="relative h-56 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <figcaption className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <span className="text-white text-sm font-medium mb-1">{tag}</span>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </figcaption>
      </figure>

      {/* body */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary-500 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{short}</p>
      </div>

      {/* footer */}
      <div className="px-5 py-3 flex justify-between items-center">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition"
        >
          View&nbsp;Details
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        ) : (
          <span className="text-xs text-gray-400 dark:text-gray-500">Private Project</span>
        )}
      </div>
    </article>
  );
}

/* —— MODAL —— */
function ProjectModal({ project, onClose }) {
  const { title, tag, client, long, tech, link, img } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onMouseDown={onClose}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden"
      >
        {/* hero */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img src={img} alt={title} className="object-cover w-full h-full" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block bg-black/60 text-white text-xs font-medium px-2 py-1 rounded mr-2">{tag}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow">{title}</h3>
          </div>
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {client && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Client:&nbsp;</strong>{client}
            </p>
          )}

          <section>
            <h4 className="text-lg font-semibold mb-2">About the Project</h4>
            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">{long.trim()}</p>
          </section>

          {!!tech?.length && (
            <section>
              <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-600 text-white rounded-lg font-medium hover:shadow-lg"
            >
              Visit Project
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
