"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 -z-10" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 blur-3xl" />
        <div className="container-responsive grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=""
            >
              Gereja yang Mengasihi Kota
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-slate-300 max-w-xl"
            >
              Kami adalah komunitas GPdI yang bertumbuh dalam iman, harapan, dan kasih.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex gap-3 flex-wrap"
            >
              <Link href="#join" className="btn-primary">Hadiri Ibadah</Link>
              <Link href="/about" className="btn-secondary">Pelajari Kami</Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="glass rounded-3xl p-6 card-hover"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[--color-primary]/20 to-[--color-secondary]/20 grid place-items-center">
              <span className="text-sm">Video/Foto Gereja (placeholder)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section-pad">
        <div className="container-responsive">
          <h2 className="">Pelayanan Kami</h2>
          <p className="mt-2 max-w-2xl">Berbagai pelayanan untuk semua kalangan usia.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Anak", "Pemuda", "Keluarga", "Misi", "Komsel", "Doa"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[--color-primary] to-[--color-secondary] mb-3" />
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-slate-300 mt-1">Deskripsi singkat pelayanan {name.toLowerCase()}.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-pad bg-[--surface-2]">
        <div className="container-responsive">
          <h2 className="">Acara Mendatang</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[1, 2].map((n) => (
              <motion.div key={n} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-6 card-hover">
                <p className="text-xs text-slate-400">Minggu, 10:30 WIB</p>
                <h3 className="font-medium mt-1">Ibadah Raya GPdI</h3>
                <p className="text-sm text-slate-300 mt-1">Ibadah raya dengan pujian penyembahan dan Firman Tuhan.</p>
                <div className="mt-4"><Link href="#" className="btn-secondary">Detail</Link></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="section-pad">
        <div className="container-responsive text-center">
          <h2 className="">Mari Bergabung</h2>
          <p className="mt-2 text-slate-300">Kami menantikan kehadiran Anda minggu ini.</p>
          <div className="mt-6 inline-flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="btn-primary">Hubungi Kami</Link>
            <Link href="/events" className="btn-secondary">Lihat Jadwal</Link>
          </div>
    </div>
      </section>
    </main>
  );
}
