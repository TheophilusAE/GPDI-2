"use client";

import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/30">
      <div className="container-responsive flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-[--brand-red-600] to-[--brand-blue-600]" />
          <span className="font-semibold tracking-tight">GPdI Church</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-[--brand-blue-700] transition">
              {item.label}
            </Link>
          ))}
          <Link href="#join" className="btn-primary">Bergabung</Link>
        </nav>

        <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(true)} aria-label="Buka menu">
          <HiOutlineMenu size={22} />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        className="md:hidden overflow-hidden border-t border-white/30"
      >
        <div className="container-responsive py-3 space-y-2">
          {navItems.map((item, idx) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: open ? 1 : 0, y: open ? 0 : 8 }}
              transition={{ delay: open ? idx * 0.05 : 0 }}
            >
              <Link href={item.href} className="block py-2" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div>
            <Link href="#join" className="btn-primary w-full" onClick={() => setOpen(false)}>
              Bergabung
            </Link>
          </div>
          <button className="absolute top-3 right-4 p-2" aria-label="Tutup menu" onClick={() => setOpen(false)}>
            <HiOutlineX size={22} />
          </button>
        </div>
      </motion.div>
    </header>
  );
}


