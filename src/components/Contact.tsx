import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Contact() {
  const reduce = useReducedMotion();

  const linkClass =
    "underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:hover:text-neutral-100";

  return (
    <section className="flex min-h-[60dvh] flex-col justify-center py-16">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="mailto:jules.odea@gmail.com"
            className="font-medium underline-offset-4 hover:underline"
          >
            jules.odea@gmail.com
          </a>
          <div className="flex gap-4 text-neutral-500 dark:text-neutral-400">
            <a
              href="https://github.com/julesodea"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/julesodea"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            <a href="/cv" target="_blank" className={linkClass}>
              CV
            </a>
          </div>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
          I am a passionate and collaborative Frontend Developer with 6+ years
          of experience delivering innovative, highly optimised web and mobile
          applications for global clients. Leveraging technologies like
          JavaScript, TypeScript, React, HTML, CSS, SCSS, and Tailwind, I
          combine technical excellence with a focus on creating responsive,
          user-friendly solutions delivering for client and customer needs.
        </p>

        <a
          href="/"
          aria-label="Back to home"
          className="group inline-flex w-max items-center pt-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <svg
            width="20"
            height="14"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden
          >
            <path
              d="M24 9H1M1 9L9 1M1 9L9 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
