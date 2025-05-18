// src/components/TechnicalSkills.jsx
import React from 'react';
import '../styles/TechnicalSkills.css';

const TechnicalSkills = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    {/* ───────── Decorative blobs ───────── */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-100 dark:opacity-0 rounded-full blur-3xl opacity-60 translate-y-1/4 translate-x-1/4" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-900/20 opacity-0 dark:opacity-100 rounded-full blur-3xl translate-y-1/4 translate-x-1/4" />
    </div>

    <div className="container mx-auto px-6">
      {/* ───────── Heading ───────── */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full border bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
          MY&nbsp;EXPERTISE
        </div>

        <h2 className="relative inline-block text-3xl md:text-4xl font-bold gradient-text">
          Technical&nbsp;Skills
          <span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-600" />
        </h2>
      </div>

      {/* ───────── Skill cards ───────── */}
      <div className="mb-16 -mx-4 overflow-x-auto">
        <div className="flex space-x-8 px-4 w-max">
          {/* 1 ─ Backend */}
          <SkillCard
            color="primary"
            title="Backend Development"
            icon="/static/server.svg"
            items={[
              ['Python', '/static/python.svg'],
              ['Django', '/static/django.svg'],
              ['FastAPI', '/static/FastAPI.svg'],
            ]}
          />

          {/* 2 ─ AI / ML */}
          <SkillCard
            color="secondary"
            title="AI & Data‑Science"
            icon="/static/ai-brain.svg"
            items={[
              ['RLHF / Human‑Eval', '/static/rlhf.svg'],
              ['LLM Fine‑tuning', '/static/llm.svg'],
              ['TensorFlow', '/static/tensorflow.svg'],
              ['PyTorch', '/static/pytorch.svg'],
            ]}
          />

          {/* 3 ─ Database & Cloud */}
          <SkillCard
            color="indigo"
            title="Database & Cloud"
            icon="/static/database.svg"
            items={[
              ['PostgreSQL', '/static/postgresql.svg'],
              ['MongoDB', '/static/mongodb.svg'],
              ['AWS', '/static/aws.svg'],
            ]}
          />

          {/* 4 ─ DevOps · Automation · Scraping */}
          <SkillCard
            color="teal"
            title="DevOps & Automation"
            icon="/static/ci-cd-svgrepo-com.svg"
            items={[
              ['Docker', '/static/docker-icon.svg'],
              ['CI/CD Pipelines', '/static/ci-cd-svgrepo-com.svg'],
              ['Automation', '/static/automation.svg'],
              ['Web‑Scraping', '/static/scraping.svg'],
            ]}
          />
        </div>
      </div>


      {/* ───────── Badge list ───────── */}
      <div className="mt-20">
        <h3 className="mb-8 text-xl font-bold text-center">Tech‑stack Highlights</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            ['Python', '/static/python.svg'],
            ['Django', '/static/django.svg'],
            ['FastAPI', '/static/FastAPI.svg'],
            ['JavaScript', '/static/javascript.svg'],
            ['React', '/static/react.svg'],
            ['TensorFlow', '/static/tensorflow.svg'],
            ['PyTorch', '/static/pytorch.svg'],
            ['Keras', '/static/keras.svg'],
            ['Scikit-learn', '/static/scikit-learn.svg'],
            ['PostgreSQL', '/static/postgresql.svg'],
            ['MongoDB', '/static/mongodb.svg'],
            ['C++', '/static/cpp.svg'],
            ['AWS', '/static/aws.svg'],
            ['Docker', '/static/docker-icon.svg'],
            ['Web‑Scraping', '/static/scraping.svg'],
          ].map(([label, icon]) => (
            <Badge key={label} label={label} icon={icon} />
          ))}
        </div>
      </div>

      {/* ───────── CTA ───────── */}
      <div className="mt-20 text-center">
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-3 font-medium text-white rounded-lg shadow-md bg-gradient-to-r from-primary-500 to-secondary-600 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Let’s&nbsp;Discuss&nbsp;Your&nbsp;Project
        </a>
      </div>
    </div>
  </section>
);

/* ---------- tiny helpers ---------- */

const SkillCard = ({ color, title, icon, items }) => (
  <div
    className={`group relative overflow-hidden p-8 rounded-xl border bg-card text-card-foreground shadow-sm border-gray-100 dark:border-gray-700/50 transition hover:-translate-y-1 hover:shadow-md`}
  >
    <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-${color}-100 dark:bg-${color}-800/30 transition group-hover:scale-110`} />
    <div className="relative">
      <div className={`w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-${color}-50 dark:bg-${color}-900/20`}>
        <img src={icon} alt={title} width="32" height="32" />
      </div>
    </div>

    <h3 className="relative mb-4 text-xl font-bold">{title}</h3>

    <ul className="space-y-4">
      {items.map(([label, img]) => (
        <li key={label} className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border shadow-sm flex items-center justify-center">
            <img src={img} alt={label} width="24" height="24" />
          </div>
          <span className="font-medium">{label}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Badge = ({ label, icon }) => (
  <div className="group">
    <div className="px-5 py-4 flex flex-col items-center rounded-xl border bg-white dark:bg-gray-800 shadow-sm border-gray-100 dark:border-gray-700/50 transition hover:-translate-y-1 hover:shadow-md">
      <div className="w-10 h-10 mb-3 flex items-center justify-center">
        <img src={icon} alt={label} width="32" height="32" />
      </div>
      <span className="text-sm font-medium text-center">{label}</span>
    </div>
  </div>
);

export default TechnicalSkills;
