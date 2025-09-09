"use client";

import { motion } from "framer-motion";

export default function MinistriesClient() {
  const items = [
    { title: "Sekolah Minggu", desc: "Mengajar Firman bagi anak-anak." },
    { title: "Pemuda", desc: "Pertumbuhan iman generasi muda." },
    { title: "Keluarga", desc: "Pemuridan keluarga dan pernikahan." },
    { title: "Misi", desc: "Menjangkau jiwa dan pelayanan sosial." },
  ];

  return (
    <main className="section-pad">
      <div className="container-responsive">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white neon-text-secondary">Pelayanan</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div key={it.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[--color-primary] to-[--color-secondary] mb-3" />
              <h3 className="font-medium text-white">{it.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}


