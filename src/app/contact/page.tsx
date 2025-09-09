import { Metadata } from "next";

export const metadata: Metadata = { title: "Kontak • GPdI Church" };

export default function ContactPage() {
  return (
    <main className="section-pad">
      <div className="container-responsive grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold">Kontak</h1>
          <p className="text-slate-600 mt-3">Silakan tinggalkan pesan, kami akan segera membalas.</p>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Nama" />
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" />
            <textarea className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Pesan" rows={5} />
            <button className="btn-primary">Kirim</button>
          </form>
        </div>
        <div className="glass rounded-3xl p-6">
          <p className="text-sm text-slate-600">Alamat: Jl. Damai No. 123, Kota Sejahtera</p>
          <p className="text-sm text-slate-600 mt-2">Email: info@gpdi.example</p>
          <p className="text-sm text-slate-600 mt-2">Telepon: 0812-3456-7890</p>
        </div>
      </div>
    </main>
  );
}


