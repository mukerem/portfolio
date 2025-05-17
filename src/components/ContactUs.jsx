// ────────────────────────────────────────────────────────────────
//  src/components/ContactUs.jsx   (with EmailJS integration)
// ────────────────────────────────────────────────────────────────
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactUs.css';

/*  ───────────  main component  ─────────── */
const ContactUs = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

  /* handle submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_xlm717c', 
        'template_e9wlsmc',
        formRef.current,
        'ZVSXT8gMHXmpQQTBV'  
      );
      formRef.current.reset();
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* decorative blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 dark:opacity-0 rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-900/10 opacity-0 dark:opacity-100 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6">
        {/* heading */}
        <Header />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* left – info */}
          <aside className="md:col-span-5 lg:col-span-4">
            <InfoPanel />
          </aside>

          {/* right – form */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                {/* name & email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField id="name" label="Name" name="user_name" type="text" placeholder="Your name" required />
                  <InputField id="email" label="Email" name="user_email" type="email" placeholder="Your email" required />
                </div>

                {/* subject */}
                <InputField id="subject" label="Subject" name="subject" type="text" placeholder="Subject" required />

                {/* message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={8}
                    required
                    className="flex min-h-[80px] w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                {/* submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 h-10 px-8 py-3 w-full md:w-auto rounded-md text-sm font-medium bg-gradient-to-r from-primary-500 to-secondary-600 text-white hover:bg-primary/90 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-60"
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>

                {/* feedback */}
                {status === 'success' && (
                  <p className="text-green-600 dark:text-green-400 pt-2">Message sent! I’ll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 dark:text-red-400 pt-2">
                    Oops – something went wrong. Please try again later or email me directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ────────── reusable sub-sections ────────── */
const Header = () => (
  <header className="mb-16 text-center">
    <span className="px-4 py-1.5 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-600 dark:text-secondary-400 rounded-full text-sm font-medium inline-block mb-4">
      GET&nbsp;IN&nbsp;TOUCH
    </span>
    <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
      Contact&nbsp;Me
      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-600 to-primary-500 rounded-full" />
    </h2>
    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Have a project in mind or want to discuss a collaboration? Feel free to reach out.
    </p>
  </header>
);

const InfoPanel = () => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 md:p-8 space-y-8 h-full">
    <ContactRow
      icon={<MapPinIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
      title="Location"
      detail="Addis Ababa, Ethiopia"
      bg="bg-primary-50 dark:bg-primary-900/20"
    />
    <ContactRow
      icon={<MailIcon className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />}
      title="Email"
      detail={
        <a href="mailto:mukeremali112@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">
          mukeremali112@gmail.com
        </a>
      }
      bg="bg-secondary-50 dark:bg-secondary-900/20"
    />
    <SocialLinks />
    <MapEmbed />
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className="text-lg font-bold mb-4">Follow Me</h3>
    <div className="flex flex-wrap gap-3">
      <SocialIcon
        label="GitHub"
        href="https://github.com/mukerem"
        hover="hover:bg-gray-200 dark:hover:bg-gray-600"
        icon={<GitHubIcon className="w-5 h-5" />}
      />
      <SocialIcon
        label="LinkedIn"
        href="https://www.linkedin.com/in/mukerem/"
        hover="hover:bg-blue-50 dark:hover:bg-blue-900/20"
        icon={<LinkedInIcon className="w-5 h-5" />}
      />
      <SocialIcon
        label="YouTube"
        href="https://www.youtube.com/@mukeremali5346"
        hover="hover:bg-red-50 dark:hover:bg-red-900/20"
        icon={<YouTubeIcon className="w-5 h-5" />}
      />
    </div>
  </div>
);

const MapEmbed = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.810120949313!2d38.752091!3d8.989613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857fc0f4d50b%3A0x601bea2660723507!2sTOPTECH%20IT%20SOLUTION%20PLC!5e0!3m2!1sen!2set!4v1747503783663!5m2!1sen!2set"
    width="300"
    height="200"
    title="location"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full rounded-md"
  />
);

/* ────────── tiny helpers ────────── */
const InputField = ({ id, label, ...rest }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {label}
    </label>
    <input
      id={id}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      {...rest}
    />
  </div>
);

const ContactRow = ({ icon, title, detail, bg }) => (
  <div className="flex items-start">
    <div className={`w-12 h-12 ${bg} rounded-full flex items-center justify-center mr-4`}>{icon}</div>
    <div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{detail}</p>
    </div>
  </div>
);

const SocialIcon = ({ href, icon, label, hover }) => (
  <a
    aria-label={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors ${hover}`}
  >
    {React.cloneElement(icon, { className: `${icon.props.className} text-gray-500 dark:text-gray-400 group-hover:text-current` })}
  </a>
);

/* ────────── inline SVG icons (unchanged) ────────── */
const MapPinIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a5.9 5.9 0 0 0-1-3.5c.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5a5 5 0 0 0-.85 5.5V22" />
    <path d="M9 18c-4.5 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0 2 2 0 0 1-1.4-1.4Z" />
    <path d="m10 15 5-3-5-3Z" />
  </svg>
);

export default ContactUs;
