export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Muhamad Fadli Ilyaasin.</p>
        <p>Dibangun dengan Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
