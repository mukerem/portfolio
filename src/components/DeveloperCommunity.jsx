// src/components/ContactUs.jsx
import React from 'react';

const stats = [
  { label: 'Total Attendees', value: '1 000+' },
  { label: 'Events Organised', value: '3' },
  { label: 'Growth Rate', value: '300 %' },
];

const history = [
  {
    name: 'Developer Meetup V1',
    date: 'Sep 10, 2023',
    attendees: 280,
    venue: 'Addis Amba Venue',
  },
  {
    name: 'Developer Meetup V2',
    date: 'Mar 15, 2024',
    attendees: 350,
    venue: 'ALX Hub – Hayahulet',
  },
  {
    name: 'Developer Meetup V3',
    date: 'Feb 22, 2025',
    attendees: 370,
    venue: 'ALX Capstone Hub – Lideta',
  },
];

const ContactUs = () => (
  <section id="devmeetup" className="py-16">
    <div className="container mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground mb-2">
          Community&nbsp;Project
        </span>
        <h2 className="text-3xl font-bold mb-4">Developer Meetup&nbsp;Ethiopia</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Co‑founded with Meron Abate, Developer&nbsp;Meetup has grown into one of Ethiopia’s largest tech communities,
          hosting more than&nbsp;1 000 attendees across three successful events.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-lg border bg-card text-card-foreground shadow-sm text-center py-6"
          >
            <p className="font-semibold tracking-tight text-lg text-gray-600">{label}</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">{value}</p>
          </div>
        ))}
      </div>

      {/* Event history */}
      <h3 className="text-xl font-semibold text-center mb-6">Event&nbsp;History</h3>
      <div className="space-y-4 mb-10">
        {history.map(({ name, date, attendees, venue }) => (
          <article
            key={name}
            className="rounded-lg border-l-4 border-blue-500 bg-card text-card-foreground shadow-sm overflow-hidden"
          >
            <div className="p-4 md:p-6">
              <header className="flex flex-wrap items-center justify-between gap-4 mb-2">
                <h4 className="text-lg font-medium">{name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{date}</span>
                  <UsersIcon className="w-4 h-4 ml-2" />
                  <span>{attendees}&nbsp;attendees</span>
                </div>
              </header>
              <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-0.5 text-xs font-semibold">
                {venue}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="rounded-lg bg-gray-50 dark:bg-blue-900/20 shadow-sm text-card-foreground mb-8 border-none p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-medium">
              CM
            </div>
          </div>
          <div>
            <p className="text-gray-600">
              We started Developer&nbsp;Meetup to connect Ethiopia’s tech talent and create a space for knowledge
              sharing.&nbsp;What began as a small gathering has evolved into a thriving community that grows with each
              event.
            </p>
            <cite className="block text-sm font-medium mt-2 not-italic">Chapi Menge – Founder</cite>
          </div>
        </div>
      </blockquote>

      {/* CTA */}
      <div className="text-center">
        <a
          href="https://devmeetup.et/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md transition-colors"
        >
          Visit&nbsp;DevMeetup.et
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* Icons                                                               */
const CalendarIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ArrowRightIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default ContactUs;
