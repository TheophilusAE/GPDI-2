import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/30">
      <div className="container-responsive py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-full bg-gradient-to-br from-[--brand-red-600] to-[--brand-blue-600]" />
            <span className="font-semibold tracking-tight">GPdI Church</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 max-w-sm">
            Komunitas yang bertumbuh dalam iman, melayani kota dengan kasih Kristus.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[--brand-blue-700]">Tentang</Link></li>
            <li><Link href="/ministries" className="hover:text-[--brand-blue-700]">Pelayanan</Link></li>
            <li><Link href="/events" className="hover:text-[--brand-blue-700]">Acara</Link></li>
            <li><Link href="/sermons" className="hover:text-[--brand-blue-700]">Khotbah</Link></li>
            <li><Link href="/contact" className="hover:text-[--brand-blue-700]">Kontak</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Alamat</h4>
          <p className="text-sm text-slate-600">
            Jl. Damai No. 123, Kota Sejahtera<br/>
            Ibadah Minggu 08.00 & 10.30 WIB
          </p>
        </div>
      </div>
      <div className="border-t border-white/30">
        <div className="container-responsive py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} GPdI Church. All rights reserved.</p>
          <p>Didesain dengan warna merah, putih, dan biru.</p>
        </div>
      </div>
    </footer>
  );
}


