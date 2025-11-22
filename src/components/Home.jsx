import React from "react";
import "../styles/Home.css";

const Home = () => (
  <section id="home" className="h-screen relative pt-12 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        {/* ─────────────────── Avatar ─────────────────── */}
        <div className="lg:w-5/12 mb-10 lg:mb-0 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-800/40 dark:to-secondary-800/40 blur-md -translate-x-2 translate-y-2" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white dark:border-gray-900">
              <img
                src="/static/mukerem-professional.webp"
                alt="Mukerem Ali"
                className="object-cover w-full h-full rounded-full"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* ─────────────────── Intro text ─────────────────── */}
        <div className="lg:w-7/12 lg:pl-12">
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center justify-center lg:justify-start px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              👋 Hello, I’m
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-600">
                Mukerem Ali
              </span>
            </h1>
            <h2 class="text-xl md:text-2xl text-gray-500 dark:text-gray-400">
              Human Feedback Expert for LLMs &amp; Senior Backend Developer
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              I specialize in{" "}
              <strong className="text-primary-600 dark:text-primary-400">
                RLHF
              </strong>{" "}
              with 3 years of LLM evaluation. I architect scalable{" "}
              <strong className="text-primary-600 dark:text-primary-400">
                backend systems
              </strong>{" "}
              with 5 years of experience, powered by the problem‑solving rigor
              of an{" "}
              <strong className="text-primary-600 dark:text-primary-400">
                ICPC World‑Finalist
              </strong>
              .
            </p>

            {/* ─────── Call‑to‑action buttons ─────── */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-10 px-8 py-3 w-full sm:w-auto text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/110yjfSbYBy6J_s6byPje1ryzPcVnN82E/view?usp=sharing"
                className="inline-flex items-center justify-center h-10 px-8 py-3 w-full sm:w-auto text-sm font-medium bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm hover:shadow transform hover:-translate-y-0.5 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>

            {/* ─────── Social icons ─────── */}
            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-5">
              <a
                aria-label="GitHub"
                href="https://github.com/mukerem"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="lucide lucide-github h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.56.7-1 1.5-1 3v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/mukerem"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="lucide lucide-linkedin h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                aria-label="Codeforces"
                href="https://codeforces.com/profile/mukeremali"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/static/codeforces-icon.svg"
                  alt="Codeforces"
                  className="h-6 w-6"
                />
              </a>

              <a
                aria-label="Telegram"
                href="https://t.me/rapi"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="lucide lucide-send h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 2 11 13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </a>

              <a
                aria-label="ICPC"
                href="https://icpc.global/ICPCID/Z8DWFGPKSEBS"
                className="text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0 C3.5 0.25 3.5 0.25 5.5 2.25 C5.89764263 4.23821313 6.23775349 6.23944339 6.5 8.25 C7.44875 8.064375 8.3975 7.87875 9.375 7.6875 C12.5 7.25 12.5 7.25 14.5 8.25 C15.0259375 7.0125 15.0259375 7.0125 15.5625 5.75 C16.201875 4.925 16.84125 4.1 17.5 3.25 C21.0625 2.8125 21.0625 2.8125 24.5 3.25 C27.79071684 6.54071684 26.86876156 10.71765505 26.875 15.1875 C26.89949219 16.10724609 26.92398438 17.02699219 26.94921875 17.97460938 C26.95501953 19.30008789 26.95501953 19.30008789 26.9609375 20.65234375 C26.96915527 21.46179443 26.97737305 22.27124512 26.98583984 23.10522461 C26.5 25.25 26.5 25.25 24.67431641 27.05688477 C21.66391999 28.70878318 19.74783181 28.06195795 16.5 27.25 C16.37625 27.889375 16.2525 28.52875 16.125 29.1875 C15.815625 30.2084375 15.815625 30.2084375 15.5 31.25 C12.70129973 32.64935013 10.59501208 32.50265405 7.5 32.25 C5.24261495 30.69318272 4.63315798 29.67368447 3.8125 27.0625 C3.709375 26.464375 3.60625 25.86625 3.5 25.25 C2.736875 25.435625 1.97375 25.62125 1.1875 25.8125 C-1.5 26.25 -1.5 26.25 -4.5 25.25 C-6.38519529 21.47960943 -5.68475994 16.89845405 -5.6875 12.75 C-5.69974609 11.77417969 -5.71199219 10.79835938 -5.72460938 9.79296875 C-5.72654297 8.86097656 -5.72847656 7.92898437 -5.73046875 6.96875 C-5.73457764 6.11216797 -5.73868652 5.25558594 -5.74291992 4.37304688 C-5.29442605 0.45334564 -3.72451314 0.26603665 0 0 Z"
                    fill="#B12B1D"
                    transform="translate(5.5,-0.25)"
                  />
                  <path
                    d="M0 0 C3.5 0.25 3.5 0.25 5.5 2.25 C5.97682157 5.70835879 5.87037157 9.19997512 5.875 12.6875 C5.89949219 13.65494141 5.92398437 14.62238281 5.94921875 15.61914062 C5.95308594 16.54791016 5.95695313 17.47667969 5.9609375 18.43359375 C5.96915527 19.28493896 5.97737305 20.13628418 5.98583984 21.01342773 C5.5 23.25 5.5 23.25 3.67041016 25.06274414 C0.62237244 26.73007906 -1.23359529 26.19362803 -4.5 25.25 C-6.38519529 21.47960943 -5.68475994 16.89845405 -5.6875 12.75 C-5.69974609 11.77417969 -5.71199219 10.79835938 -5.72460938 9.79296875 C-5.72654297 8.86097656 -5.72847656 7.92898437 -5.73046875 6.96875 C-5.73457764 6.11216797 -5.73868652 5.25558594 -5.74291992 4.37304688 C-5.29442605 0.45334564 -3.72451314 0.26603665 0 0 Z"
                    fill="#4D82C0"
                    transform="translate(5.5,-0.25)"
                  />
                  <path
                    d="M0 0 C2.875 0.6875 2.875 0.6875 3.875 1.6875 C4.31052772 4.96236574 4.43802373 8.26533304 4.625 11.5625 C4.69332031 12.48675781 4.76164062 13.41101563 4.83203125 14.36328125 C4.90744141 15.69552734 4.90744141 15.69552734 4.984375 17.0546875 C5.03561523 17.87050293 5.08685547 18.68631836 5.13964844 19.52685547 C4.875 21.6875 4.875 21.6875 3.55566406 23.45361328 C0.9653561 25.35532979 -1.01028598 25.07683925 -4.125 24.6875 C-5.80126953 23.45141602 -5.80126953 23.45141602 -7.125 21.6875 C-7.42138672 19.54272461 -7.42138672 19.54272461 -7.3046875 17.08984375 C-7.2634375 16.20619141 -7.2221875 15.32253906 -7.1796875 14.41210938 C-7.12039063 13.49236328 -7.06109375 12.57261719 -7 11.625 C-6.96390625 10.70138672 -6.9278125 9.77777344 -6.890625 8.82617188 C-6.60657802 3.70958879 -6.60657802 3.70958879 -6.125 1.6875 C-3.125 -0.3125 -3.125 -0.3125 0 0 Z"
                    fill="#FCB930"
                    transform="translate(17.125,7.3125)"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ─────── scroll‑down cue ─────── */}
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 hidden md:block">
      <button className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
        <svg
          className="h-8 w-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </button>
    </div>
  </section>
);

export default Home;
