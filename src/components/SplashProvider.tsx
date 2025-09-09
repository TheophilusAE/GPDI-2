"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-gradient-to-br from-[--brand-blue-600] via-[--brand-red-600] to-[--brand-blue-700]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-center"
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-6 rounded-full blur-2xl bg-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          />
          <h1 className="relative text-4xl sm:text-5xl font-semibold tracking-tight">
            GPdI Church
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
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function SplashProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </div>
    </>
  );
}


