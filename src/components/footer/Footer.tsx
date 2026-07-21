export default function Footer() {
  const linkClass =
    "underline-offset-4 transition-colors hover:text-neutral-900 hover:underline dark:hover:text-neutral-100";

  return (
    <footer className="mx-auto max-w-7xl px-4 py-8">
      <ul className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a href="/" className={linkClass}>
            Home
          </a>
        </li>
        <li aria-hidden className="text-neutral-300 dark:text-neutral-700">
          /
        </li>
        <li>
          <a href="/contact" className={linkClass}>
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
