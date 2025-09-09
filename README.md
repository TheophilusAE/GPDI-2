GPdI Church Portfolio — Next.js 15 + Tailwind CSS 4

## Getting Started

Pertama, jalankan server pengembangan:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

Mulai edit di `src/app/page.tsx`. Halaman akan otomatis memperbarui saat Anda menyimpan.

Proyek ini menggunakan [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) untuk memuat font Geist.

## Kustomisasi

- Warna tema berada di `src/app/globals.css` pada variabel `--brand-*` (merah/putih/biru).
- Splash/loading screen dikelola di `src/components/SplashProvider.tsx`.
- Navigasi di `src/components/Navbar.tsx`, footer di `src/components/Footer.tsx`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy ke Vercel

Cara termudah untuk deploy adalah melalui [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). 

Lihat dokumentasi [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying) untuk detail lebih lanjut.
