import React from 'react';
import '../styles/Experience.css';

/* ═════════════════════════════════════════════════════════════
   EXPERIENCE  ▸  main section
════════════════════════════════════════════════════════════════ */
const Experience = () => (
  <section id="experience" className="py-24 relative overflow-hidden">
    {/* decorative blobs */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-100 dark:opacity-0 rounded-full blur-3xl opacity-60 -translate-x-1/4" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary-900/20 opacity-0 dark:opacity-100 rounded-full blur-3xl -translate-x-1/4" />
    </div>

    <div className="container mx-auto px-6">
      {/* heading */}
      <header className="mb-16 text-center">
        <span className="inline-flex items-center px-4 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium mb-4">
          MY&nbsp;JOURNEY
        </span>
        <h2 className="text-3xl md:text-4xl font-bold gradient-text inline-block relative">
          Experience
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full" />
        </h2>
      </header>

      {/* timeline */}
      <div className="relative">
        {/* centre line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />

        <div className="space-y-12">
          {/* ── Turing (two roles) */}
          <TimelineItem
            side="right"
            dotColor="secondary"
            period="Nov 2022 – Present"
            title="Team Lead · AI Human Data"
            company="Turing"
            location="USA Remote"
            bullets={[
              'Led a team of AI Engineers in evaluating LLM outputs using detailed rubrics and structured human feedback.',
              'Reviewed and validated task quality to ensure alignment with rubric guidelines and research objectives.',
              'Collaborated with researchers to define task instructions, identify ambiguous cases, and refine evaluation criteria.',
              'Designed datasets targeting edge cases such as prompt injection, adversarial queries, and harmful content detection.',
              'Contributed to Agentic AI systems by designing interaction flows and generating evaluation data.',
              'Mentored junior engineers, fostering their growth in a dynamic, fast-evolving AI research environment.',
            ]}
          />
          <TimelineItem
            side="left"
            dotColor="secondary"
            period="Jun 2022 – Nov 2022"
            title="AI Engineer (LLM /Human Data)"
            company="Turing"
            location="USA Remote"
            bullets={[
              'Designed and curated high-quality datasets for training and fine-tuning large language models.',
              'Created diverse prompt–completion pairs for supervised fine-tuning and instruction tuning.',
              'Built RLHF pipelines by collecting and ranking human feedback, and trained reward models to align outputs with human preferences.',
              'Solved a wide range of algorithmic problems from various competitive programming platforms using Python, providing detailed, well-structured solutions and explanations focused on efficiency, edge cases, and optimal design.'
            ]}
          />

          {/* ── Nexsis Analytics */}
          <TimelineItem
            side="right"
            dotColor="primary"
            period="Feb 2025 – Present"
            title="Data & AI Engineer"
            company="Nexsis Analytics"
            location="Toronto, Canada Remote"
            bullets={[
              'Developed scalable data processing workflows on Databricks using PySpark for cleaning, transforming, and aggregating large retail transaction datasets.',
              'Fine-tuned open-source LLMs using LoRA on domain-specific corpora to enable high-accuracy document Q&A systems tailored for financial and business data.',
              'Deployed and evaluated fine-tuned models for downstream tasks such as semantic search, multi-turn Q&A, and data extraction across structured and unstructured sources.'
            ]}
          />

          {/* ── Toptech */}
          <TimelineItem
            side="left"
            dotColor="primary"
            period="Jan 2021 – Present"
            title="Co-Founder & Senior Backend Developer"
            company="Toptech IT Solutions PLC"
            location="Addis Ababa, Ethiopia"
            bullets={[
              'Co-founded the company and led the backend engineering team, contributing to project planning and technical decision-making to align development with business goals.',
              'Designed and developed scalable backend systems using Django, with a focus on modular architecture, performance, and maintainable RESTful APIs.',
              'Built automation tools and web scraping pipelines to collect and process data from multiple external sources for analytics and platform features.',
              'Containerized applications using Docker and managed CI/CD pipelines to ensure smooth and consistent deployment across development, staging, and production environments.',
              'Oversaw system testing, performance tuning, debugging, and maintenance to ensure stability, reliability, and high application performance post-deployment.'
            ]}
          />

          {/* ── Scoville */}
          <TimelineItem
            side="right"
            dotColor="secondary"
            period="Jan 2023 – Feb 2023"
            title="AI Engineer Intern"
            company="Scoville Co., Ltd."
            location="Tokyo, Japan"
            bullets={[
              'Contributed to a machine learning project on text anonymization, developing algorithms to detect and mask sensitive entities in unstructured text data.',
              'Gained hands-on experience working in a multicultural environment with colleagues from 17+ nationalities, enhancing communication and cross-cultural collaboration skills.',
              'Collaborated with engineers and researchers on real-world NLP challenges, applying privacy-preserving techniques and best practices in ethical AI development.'
            ]}
          />

          {/* ── EtCPC */}
          <TimelineItem
            side="left"
            dotColor="primary"
            period="Mar 2021 – Present"
            title="Scientific‑Committee Head"
            company="Ethiopian ICPC (EtCPC)"
            location="Nationwide"
            bullets={[
              'Created original problem sets for ICPC local and regional competitions, ensuring clarity, balanced difficulty, and relevance to core algorithmic concepts.',
              'Mentored and monitored students in competitive programming contests, delivering tutorials on algorithms, programming languages, and effective problem-solving techniques.',
              'Organized annual ICPC events and mock contests, managing logistics, scheduling, and coordination with universities and participants.',
              'Set up the competition environment by installing operating systems, compilers, editors, and configuring machines to meet contest standards and fairness requirements.'
            ]}
          />

          {/* ── AddisCoder */}
          <TimelineItem
            side="right"
            dotColor="primary"
            period="Jul 2023 – Aug 2023"
            title="Teaching Assistant – Algorithms"
            company="AddisCoder"
            location="Addis Ababa, Ethiopia"
            bullets={[
              'Instructed over 100 top-performing high school students in Python, data structures, and problem-solving, fostering strong algorithmic thinking and programming foundations.',
              'Customized the curriculum, created detailed solution notes, and guided students through hands-on coding sessions to develop analytical and problem-solving skills.',
              'Collaborated with teaching assistants from top global tech companies and universities, sharing real-world software engineering experience and inspiring students through mentorship.',
              'Provided personalized feedback, university application support, and recommendations—contributing to 37% of students earning scholarships at top international universities.',
            ]}
          />

          {/* ── ASTU */}
          <TimelineItem
            side="left"
            dotColor="secondary"
            period="Jan 2021 – Jun 2022"
            title="Teaching Assistant – Computer Science"
            company="Adama Science and Technology University"
            location="Adama, Ethiopia"
            bullets={[
              'Assisted in teaching undergraduate courses including Python programming, Microcomputer & Interface, and Distributed Programming.',
              'Led lab sessions, provided one-on-one guidance, and helped students grasp core programming and system-level concepts.',
              'Supported practical sessions and debugging exercises, reinforcing course material through hands-on learning experiences while pursuing my MSc in Computer Science.',
            ]}
          />

          {/* ── ASTU / CSEC (multi‑role) */}
          <TimelineItem
            side="right"
            dotColor="secondary"
            period="Oct 2017 – Jun 2022"
            title="Developer | Mentor | Capacity Lead"
            company="ASTU-CSEC"
            location="Adama, Ethiopia"
            bullets={[
              'Delivered tutorials on <strong>algorithms, data structures, and competitive programming</strong> to club members and freshman university students, covering languages like Python, C++, Java, and foundational math.',
              'Designed and developed <strong>Andalus Competitive Programming Judge</strong>, Ethiopia’s first open-source contest platform, currently used by the club and other university communities.',
              'Served as <strong>Head of Capacity Building</strong>, overseeing tutorials, seminars, and educational content creation, including videos and structured learning materials to support student growth.',
            ]}
          />

          {/* ── iCog‑Labs */}
          <TimelineItem
            side="left"
            dotColor="primary"
            period="Jul 2018 – Sep 2018"
            title="Software Engineer Intern"
            company="iCog‑Labs"
            location="Addis Ababa, Ethiopia"
            bullets={[
              'Implemented an intent classification module for the Sophia the Robot chatbot to enable accurate understanding of user queries.',
              'Contributed to the development of a chatbot that delivers automated responses and university information about Adama Science and Technology University.',
              'Gained valuable hands-on experience during my first internship, collaborating with an experienced development team and applying NLP concepts in a real-world project.'           
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

/* ═════════════════════════════════════════════════════════════
   Timeline item  – helper component
════════════════════════════════════════════════════════════════ */
function TimelineItem({ side, dotColor, period, title, company, location, bullets }) {
  const metaCol = side === 'right' ? 'mb-8 md:mb-0 md:order-2 md:pl-10' : 'mb-8 md:mb-0 md:text-right md:pr-10';
  const descCol = side === 'right' ? 'md:order-1 md:pr-10' : 'md:pl-10';

  return (
    <div className="relative">
      {/* dot on centre line */}
      <div className={`hidden md:block absolute left-1/2 top-0 w-5 h-5 rounded-full bg-${dotColor}-500 border-4 border-white dark:border-gray-900 -translate-x-1/2 z-10`} />

      <div className="md:grid md:grid-cols-2 gap-8 items-start">
        {/* meta */}
        <div className={metaCol}>
          <span className={`inline-block px-3 py-1 bg-${dotColor}-50 dark:bg-${dotColor}-900/20 text-${dotColor}-600 dark:text-${dotColor}-400 rounded-md text-sm font-medium mb-2`}>
            {period}
          </span>
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <div className={`flex items-center text-gray-500 dark:text-gray-400 ${side === 'left' ? 'md:justify-end' : ''} mb-4`}>
            <img src="./static/location-svgrepo-com.svg" alt="" className="mr-1" width={16} height={16} />
            At&nbsp;
            <a href={companyLinks[company] || '#'} target="_blank" rel="noopener noreferrer" className={`mx-1 text-${dotColor}-600 dark:text-${dotColor}-400 hover:underline`}>
              {company}
            </a>
            <span className="mx-1">&nbsp;</span>
            {location}
          </div>
        </div>

        {/* description */}
        <div className={`${descCol} bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition`}>
          <ul className="space-y-2 text-gray-500 dark:text-gray-300">
            {bullets.map((b) => (
              <li key={b} className="flex">
                <span className={`mr-2 text-${dotColor}-500`}>•</span>
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* company → homepage */
const companyLinks = {
  Turing: 'https://www.turing.com/',
  'Nexsis Analytics': 'https://www.nexsis.ca/',
  'Toptech IT Solutions PLC': 'https://toptech.et/',
  'Scoville Co., Ltd.': 'https://sc0ville.com/',
  'Ethiopian ICPC (EtCPC)': 'https://www.linkedin.com/company/ethiopian-collegiate-programming-contest/',
  AddisCoder: 'https://addiscoder.com/',
  'iCog‑Labs': 'https://icog-labs.com/',
  'ASTU CSEC': 'https://et.linkedin.com/company/csec-astu',
  'Adama Science & Technology Univ.': 'https://astu.edu.et/',
};

export default Experience;
