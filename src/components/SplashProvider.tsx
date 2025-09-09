"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center" style={{background:
      `radial-gradient(60rem 40rem at 10% -10%, color-mix(in oklab, var(--brand-primary) 25%, transparent), transparent 60%),
        radial-gradient(70rem 45rem at 120% 0%, color-mix(in oklab, var(--brand-secondary) 25%, transparent), transparent 60%),
        var(--background)`}}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-center"
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-6 rounded-3xl blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backgroundColor: "rgba(255,255,255,0.16)" }}
            transition={{ delay: 0.1, duration: 0.8 }}
          />
          <h1 className="relative text-4xl sm:text-5xl font-extrabold tracking-tight">
            GPDI Persadamas Banjarmasin
          </h1>
        </div>
        <p className="mt-3 text-white/80">Menghadirkan kasih bagi kota</p>
        <motion.div
          className="mt-10 h-1 w-48 bg-white/20 rounded-full overflow-hidden mx-auto"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="h-full"
            initial={{ x: "-100%" }}
            animate={{ x: 0, background: "linear-gradient(90deg, var(--brand-primary), var(--brand-secondary))" }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function SplashProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null;
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = (stored === "dark" || stored === "light") ? stored : (systemDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}


