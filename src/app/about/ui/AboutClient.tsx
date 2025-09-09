"use client";

import { motion } from "framer-motion";

export default function AboutClient() {
  return (
    <main className="section-pad">
      <div className="container-responsive grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold">Tentang Kami</h1>
          <p className="text-slate-600 mt-3">GPdI adalah gereja yang berfokus pada Firman, doa, dan misi.</p>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>Kami percaya kepada Yesus Kristus sebagai Tuhan dan Juruselamat.</p>
            <p>Kami melayani keluarga, anak-anak, pemuda, dan komunitas sekitar.</p>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-6">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[--brand-blue-600]/20 to-[--brand-red-600]/20" />
        </motion.div>
      </div>
    </main>
  );
}


