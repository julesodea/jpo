import ThemeToggle from '../theme/ThemeToggle';

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-950/70">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between px-4 py-4">
          <a
            className="font-medium tracking-tight underline-offset-4 hover:underline"
            href="/"
          >
            JULES O'DEA
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
