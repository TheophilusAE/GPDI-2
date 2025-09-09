"use client";

import { motion } from "framer-motion";

export default function EventsClient() {
  return (
    <main className="section-pad">
      <div className="container-responsive">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white neon-text-secondary">Acara</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {[1, 2, 3, 4].map((n, i) => (
            <motion.div key={n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6">
              <p className="text-xs text-slate-300">Minggu, 10:30 WIB</p>
              <h3 className="font-medium mt-1 text-white">Ibadah Raya {n}</h3>
              <p className="text-sm text-slate-300 mt-1">Pujian penyembahan dan Firman Tuhan.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}


