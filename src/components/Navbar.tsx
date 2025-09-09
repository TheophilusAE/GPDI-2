"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang" },
  { href: "/ministries", label: "Pelayanan" },
  { href: "/events", label: "Acara" },
  { href: "/sermons", label: "Khotbah" },
  { href: "/contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">(
    (typeof window !== "undefined" && (localStorage.getItem("theme") as "dark" | "light")) || "dark"
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b" style={{backgroundColor: "color-mix(in oklab, var(--surface) 75%, transparent)", borderColor: "var(--border-soft)"}}>
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-[--color-primary] to-[--color-secondary]" />
          <span className="font-semibold tracking-tight">GPdI Church</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition relative px-1 py-2 rounded-md hover-overlay ${
                  isActive ? "text-[--color-primary]" : "text-slate-200 hover:text-[--color-primary]"
                }`}
              >
                {item.label}
                {isActive && <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[3px] w-6 bg-[--color-primary] rounded-full" />}
              </Link>
            );
          })}
          <Link href="#join" className="btn-primary">Bergabung</Link>
          <button
            className="ml-2 rounded-lg p-2 hover-overlay"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
        </nav>

        <button className="md:hidden p-2 rounded-md hover-overlay" onClick={() => setOpen(true)} aria-label="Buka menu" aria-expanded={open} aria-controls="mobile-nav">
          <HiOutlineMenu size={22} />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        className="md:hidden overflow-hidden border-t"
        style={{borderColor: "var(--border-soft)"}}
        id="mobile-nav"
      >
        <div className="container-responsive py-3 space-y-2">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : 8 }}
              transition={{ delay: open ? idx * 0.05 : 0 }}
            >
              <Link href={item.href} className="block py-2 rounded-md hover-overlay text-slate-200 hover:text-[--color-primary]" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div>
            <Link href="#join" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Bergabung
            </Link>
          </div>
          <button
            className="mt-2 rounded-lg p-2 hover-overlay"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
          </button>
          <button className="absolute top-3 right-4 p-2" aria-label="Tutup menu" onClick={() => setOpen(false)}>
            <HiOutlineX size={22} />
          </button>
        </div>
      </motion.div>
    </header>
  );
}


