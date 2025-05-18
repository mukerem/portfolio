import React from 'react';
import '../styles/About.css';

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6 max-w-4xl">
      {/* ─────────── Section header ─────────── */}
      <div className="mb-16 text-center">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-400 text-sm font-medium">
          ABOUT&nbsp;ME
        </span>
        <h2 className="relative inline-block text-3xl md:text-4xl font-bold gradient-text">
          Who I Am
          <span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
        </h2>
      </div>

      {/* ─────────── Body ─────────── */}
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
        {/* RLHF / Turing */}
        <p>
          Over the past&nbsp;3 years I’ve led and contributed to the <strong>AI Human‑Data Engineering</strong> team at&nbsp;
          <strong>Turing (USA, remote)</strong>, building high‑quality supervised &amp; preference data for large language 
          models and agentic systems. I’ve designed <strong>RLHF pipelines</strong>, evaluated LLM outputs using detailed 
          rubrics, created adversarial and safety‑focused datasets, and mentored junior engineers—all while using&nbsp;
          <strong>Python</strong> daily to solve complex algorithmic problems and ensure model alignment and data quality.
        </p>

        {/* Cofounder / Toptech / Seleda */}
        <p>
          As co‑founder of <strong>Toptech IT Solutions</strong> (Addis Ababa) I guide multi‑disciplinary teams building
          products for African businesses. Flagship project:{' '}
          <a href="https://seleda.et/" target="_blank" rel="noreferrer">
            <strong>Seleda</strong>
          </a>
          &nbsp;— a multi‑tenant e‑commerce marketplace whose micro‑service backend and payment‑gateway integrations I
          architected from the ground up.
        </p>

        {/* ICPC journey */}
        <p>
          My competitive‑programming journey began in 2017 and culminated in the{' '}
          <strong>ICPC World Finals Dhaka 2021</strong>. With&nbsp;2 000 + solved problems across Codeforces, Leetcode, and Kattis. I now coach Ethiopia’s university teams and organise the national ICPC qualifiers.
        </p>

        {/* Andalus Judge */}
        <p>
          I created{' '}
          <a
            href="https://github.com/mukerem/Andalus/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Andalus Judge</strong>
          </a>{' '}
          — the first Ethiopian competitive programming judge — automating compilation, execution and scoring for thousands of student
          submissions every week.
        </p>

        {/* Mentorship / teaching */}
        <p>
          Passionate about community, I mentor young talent through <strong>AddisCoder</strong>, ICPC trainings at{' '}
          <strong>ASTU</strong>, and countless online tutorials, helping hundreds master algorithms and clean
          software design.
        </p>
      </div>
    </div>
  </section>
);

export default About;
