"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Github, Linkedin, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";

const links = [
  { href: "/#about", label: "Tentang" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Sertifikasi" },
  { href: "/#projects", label: "Project" },
  { href: "/#contact", label: "Kontak" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight transition-colors hover:text-accent"
          onClick={closeMenu}
        >
          Muhamad Fadli Ilyaasin
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/fadliilysn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-ink sm:flex"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/in/muhamad-fadli-ilyaasin"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-ink sm:flex"
          >
            <Linkedin size={16} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Ganti tema"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-accent transition-colors hover:bg-surface"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface hover:text-ink sm:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-bg/95 px-6 py-5 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-2 flex items-center gap-3 border-t border-border pt-4">
                <a
                  href="https://github.com/fadliilysn"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/muhamad-fadli-ilyaasin"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2 text-xs font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
