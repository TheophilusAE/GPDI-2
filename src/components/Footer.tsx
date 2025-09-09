import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t" style={{borderColor: "var(--border-soft)", backgroundColor: "var(--surface)"}}>
      <div className="container-responsive py-12 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-[--color-primary] to-[--color-secondary]" />
            <span className="font-semibold tracking-tight">GPDI Persadamas Banjarmasin</span>
          </div>
          <p className="mt-3 text-sm text-slate-300 max-w-sm">
            Komunitas yang bertumbuh dalam iman, melayani kota dengan kasih Kristus.
          </p>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-medium mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[--color-primary]">Tentang</Link></li>
              <li><Link href="/ministries" className="hover:text-[--color-primary]">Pelayanan</Link></li>
              <li><Link href="/events" className="hover:text-[--color-primary]">Acara</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-3">Lainnya</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sermons" className="hover:text-[--color-primary]">Khotbah</Link></li>
              <li><Link href="/contact" className="hover:text-[--color-primary]">Kontak</Link></li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-medium mb-3">Alamat</h4>
          <p className="text-sm text-slate-300">
            Jl. Damai No. 123, Kota Sejahtera<br/>
            Ibadah Minggu 08.00 & 10.30 WIB
          </p>
        </div>
      </div>
      <div className="border-t" style={{borderColor: "var(--border-soft)"}}>
        <div className="container-responsive py-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} GPDI Persadamas Banjarmasin. All rights reserved.</p>
          <p>Desain yang tenang, mudah dibaca, dan aksesibel.</p>
        </div>
      </div>
    </footer>
  );
}


