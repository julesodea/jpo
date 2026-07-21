import { Wave } from "./wave/Wave";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Home() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  const linkClass =
    "underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:hover:text-neutral-100";

  return (
    <div className="flex min-h-[100dvh] flex-col justify-center pt-[10dvh]">
      <motion.h1
        {...rise(0)}
        className="max-w-xl text-3xl font-medium leading-[1.2] tracking-tight sm:text-4xl"
      >
        Hello! <Wave /> I'm{" "}
        <span className="font-medium text-neutral-900 dark:text-neutral-100">
          Jules
        </span>
        , a{" "}
        <span className="italic text-neutral-800 dark:text-neutral-300">
          Frontend Developer
        </span>{" "}
        based in Auckland.
      </motion.h1>

      <motion.p
        {...rise(0.15)}
        className="max-w-2xl pt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg"
      >
        I am a passionate and collaborative Frontend Developer with 6+ years of
        experience delivering innovative, highly optimised web and mobile
        applications for global clients. Leveraging technologies like
        JavaScript, TypeScript, React, HTML, CSS, SCSS, and Tailwind, I combine
        technical excellence with a focus on creating responsive, user-friendly
        solutions delivering for client and customer needs.
      </motion.p>

      <motion.div
        {...rise(0.3)}
        className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:gap-6"
      >
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
      </motion.div>
    </div>
  );
}
