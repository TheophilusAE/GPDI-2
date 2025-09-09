"use client";

import { motion } from "framer-motion";

export default function SermonsClient() {
  return (
    <main className="section-pad">
      <div className="container-responsive">
        <h1 className="text-3xl sm:text-4xl font-semibold">Khotbah</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <motion.div key={n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-[--brand-blue-600]/20 to-[--brand-red-600]/20 mb-3" />
              <h3 className="font-medium">Tema Khotbah #{n}</h3>
              <p className="text-sm text-slate-600 mt-1">Ringkasan singkat khotbah minggu ini.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}


