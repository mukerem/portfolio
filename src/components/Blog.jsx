import React from 'react';
import '../styles/Blog.css';

const Blog = () => (
  <section id="blog" className="py-20 relative overflow-hidden">
    {/* Decorative blob */}
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100/50 dark:bg-secondary-900/10 rounded-full blur-3xl opacity-50 transform -translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="container mx-auto px-4 max-w-6xl">
      {/* Heading */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center rounded-full border text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-3 px-4 py-1.5 bg-secondary-50/50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 font-medium">
          MY&nbsp;THOUGHTS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold relative inline-block pb-2">
          Latest&nbsp;from&nbsp;the&nbsp;Blog
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full" />
        </h2>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured post */}
        <div className="lg:col-span-5">
          <PostCard
            image="./static/telebirr-integration.png"
            date="Jun 6, 2023"
            title="How to Integrate Telebirr in Your Web App"
            excerpt="It offers a complete guide to integrating the Telebirr API with Python, from setup and registration to authentication, payment requests, and best practices for secure, reliable implementation."
            readTime="3 min read"
            url="https://medium.com/@mukeremali112/how-to-integrate-telebirr-in-your-web-app-d20dfedd7cac/"
            large
          />
        </div>

        {/* Two smaller posts */}
        <div className="lg:col-span-7 space-y-6">
          <PostCard
            image="./static/competitive-programming-for-beginners.png"
            date="Nov 23, 2023"
            title="Competitive Programming for Beginners"
            excerpt="It provides a comprehensive overview of competitive programming—its fundamentals, key skills, learning resources, and practical applications in tech and interviews."
            readTime="10 min read"
            url="https://medium.com/@mukeremali112/competitive-programming-for-beginners-2a9b4ba19684/"
          />

          <PostCard
            image="./static/my-competitive-programming-journey.png"
            date="Nov 21, 2023"
            title="My Competitive Programming Journey"
            excerpt="It highlights my competitive programming journey—ICPC finals, mentoring, building tools, and leading national initiatives—while shaping my tech career through projects, teaching, and startup leadership."
            readTime="10 min read"
            url="https://medium.com/@mukeremali112/my-competitive-programming-journey-70cd116f0d52/"
          />
        </div>
      </div>

      {/* ───────────────────── Call to action – Medium follow ───────────────────── */}
      <div className="mt-16 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-2xl overflow-hidden shadow-xl relative">
        {/* translucent circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white opacity-10 rounded-full" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-white opacity-10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white opacity-10 rounded-full" />
        </div>

        <div className="p-8 md:p-10 relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Follow&nbsp;My&nbsp;Journey&nbsp;on&nbsp;Medium
          </h3>

          <p className="text-white/80 mb-8">
            I share in-depth tech write-ups, project breakdowns and tutorial series.
            Join me there and never miss a story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* main CTA – follow */}
            <CTAButton
              href="https://medium.com/@mukeremali112"
              bg="bg-white"
              text="text-secondary-600"
              icon={<MediumIcon className="w-5 h-5 mr-2" />}
            >
              Follow&nbsp;on&nbsp;Medium
            </CTAButton>

            {/* secondary CTA – browse articles */}
            <CTAButton
              href="https://medium.com/@mukeremali112/latest"
              bg="bg-secondary-700"
              text="text-white"
              border="border border-white/20"
              icon={<BookIcon className="w-5 h-5 mr-2" />}
            >
              Browse&nbsp;Articles
            </CTAButton>
          </div>

          <p className="text-white/70 text-sm mt-6">
            Updated&nbsp;May&nbsp;{new Date().getFullYear()} –&nbsp;
            <a
              href="https://medium.com/@mukeremali112"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium.com/@mukeremali112
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Post‑card component                                                */
const PostCard = ({ image, date, title, excerpt, readTime, url, large }) => (
  <article
    className={`rounded-lg bg-card text-card-foreground border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group ${
      large ? 'h-full overflow-hidden flex flex-col' : 'overflow-hidden flex flex-col md:flex-row'
    }`}
  >
    {/* Image */}
    <div
      className={
        large
          ? 'relative h-64 overflow-hidden'
          : 'md:w-5/12 relative overflow-hidden h-48'
      }
    >
      <img
        src={image}
        alt={title}
        className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
        loading="lazy"
        decoding="async"
      />
      <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-800/90 rounded-full text-xs font-medium shadow-sm">
        {date}
      </span>
    </div>

    {/* Content */}
    <div className={large ? 'p-6 flex flex-col h-[calc(100%-16rem)]' : 'md:w-7/12 p-6 flex flex-col justify-between'}>
      <div>
        <h3
          className={`${
            large ? 'text-xl' : 'text-lg'
          } font-bold mb-3 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors line-clamp-2`}
        >
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{excerpt}</p>
      </div>

      <div
        className={`${
          large ? 'mt-auto pt-4 border-t border-gray-100 dark:border-gray-700' : 'flex items-center justify-between mt-auto'
        }`}
      >
        <span
          className={`${large ? 'text-sm' : 'text-xs'} text-gray-500 dark:text-gray-400 flex items-center`}
        >
          <ClockIcon className={large ? 'w-4 h-4 mr-1' : 'w-3 h-3 mr-1'} />
          {readTime}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center ${
            large ? 'text-secondary-600 dark:text-secondary-400 font-medium' : 'text-secondary-600 dark:text-secondary-400 text-sm font-medium'
          } hover:underline`}
        >
          Read&nbsp;Post
          <ArrowRightIcon className={large ? 'w-4 h-4 ml-1' : 'w-3 h-3 ml-1'} />
        </a>
      </div>
    </div>
  </article>
);

/* ------------------------------------------------------------------ */
/* CTA helper                                                         */
const CTAButton = ({ href, bg, text, border = '', icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center px-6 py-3 ${bg} ${text} ${border} font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
  >
    {icon}
    {children}
  </a>
);

/* ------------------------------------------------------------------ */
/* Icons                                                              */
const ClockIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const BookIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  </svg>
);

/* -------- small Medium logo (simple M) -------- */
const MediumIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 1043.63 592.71"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M588.67 296.35c0 163.62-131.79 296.35-294.34 296.35S0 459.97 0 296.35 131.79 0 294.34 0s294.33 132.73 294.33 296.35" />
    <path d="M902.28 296.35c0 154.79-68.13 280.26-152.07 280.26s-152.07-125.47-152.07-280.26S666.27 16.09 750.21 16.09s152.07 125.47 152.07 280.26" />
    <path d="M1043.63 296.35c0 142.22-29.28 257.53-65.41 257.53-36.12 0-65.4-115.31-65.4-257.53s29.28-257.53 65.4-257.53c36.13 0 65.41 115.31 65.41 257.53" />
  </svg>
);

export default Blog;
