# CARDTARA - Kartu Budaya Nusantara 🇮🇩

![CARDTARA Banner](https://img.shields.io/badge/CARDTARA-Budaya_Nusantara-4F46E5?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

**CARDTARA** adalah aplikasi web interaktif yang menampilkan 52 kartu remi dengan konten budaya Indonesia. Setiap kartu memiliki QR code unik yang ketika di-scan membuka halaman web dengan:
- 📖 Konten edukasi budaya (gambar, audio, teks)
- 🎯 Quiz interaktif 3 soal (step-by-step)
- 🌏 Support bilingual (Indonesia & English)
- 📱 Mobile-first design

---

## ✨ Features

- ✅ **52 Kartu Budaya** - Setiap kartu punya konten budaya unik
- ✅ **Bilingual** - Indonesia & English dengan routing `/id` dan `/en`
- ✅ **Quiz Interaktif** - Step-by-step quiz dengan feedback
- ✅ **QR Code Ready** - Generate QR untuk cetak kartu fisik
- ✅ **Mobile-First** - Optimized untuk smartphone
- ✅ **No Database** - All data stored locally (JSON)
- ✅ **No Login** - Simple and accessible
- ✅ **SEO Optimized** - Dynamic metadata bilingual

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn

### Installation

1. **Clone atau download project ini**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables** (optional)
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` untuk set BASE_URL production Anda.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Buka browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Struktur Folder

```
d:\Cardtara\
├── app/
│   ├── [lang]/              # Dynamic route untuk bahasa (id/en)
│   │   ├── k/[slug]/        # Card detail pages
│   │   ├── layout.tsx       # Language layout
│   │   └── page.tsx         # Landing page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Root redirect handler
│   ├── not-found.tsx        # 404 page
│   └── globals.css          # Global styles
├── components/
│   ├── AudioPlayer.tsx      # Audio player component
│   ├── CardShell.tsx        # Card container
│   ├── LanguageSwitcher.tsx # ID/EN toggle
│   ├── Progress.tsx         # Quiz progress bar
│   └── QuizStepper.tsx      # Main quiz logic
├── content/
│   ├── cards.ts             # 52 kartu data (bilingual)
│   └── utils.ts             # Card utilities
├── lib/
│   ├── cards.ts             # Card data management
│   └── i18n.ts              # i18n utilities
├── public/
│   ├── media/               # Images & audio files
│   └── qrs/                 # Generated QR codes
├── scripts/
│   └── generate-qr.ts       # QR generation script
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## 🎴 Menambah Kartu Baru

Saat ini project sudah include **3 kartu dummy** (AS, 2S, KH). Untuk menambah kartu baru:

1. **Edit `content/cards.ts`**
   
   Tambahkan object kartu baru ke array `cardsData`:

   ```typescript
   {
     slug: "3S",  // Rank + Suit (A,2-10,J,Q,K + S,H,D,C)
     cardName: "3 of Spades",
     title: {
       id: "Judul Budaya Indonesia",
       en: "Cultural Title English"
     },
     region: {
       id: "Nama Daerah",
       en: "Region Name"
     },
     paragraphs: {
       id: ["Paragraf 1", "Paragraf 2", "Paragraf 3"],
       en: ["Paragraph 1", "Paragraph 2", "Paragraph 3"]
     },
     image: "/media/3s.webp",
     audio: "/media/3s.mp3",
     quiz: [
       {
         q: { id: "Pertanyaan 1?", en: "Question 1?" },
         choices: {
           id: ["Pilihan A", "B", "C", "D"],
           en: ["Choice A", "B", "C", "D"]
         },
         answerIndex: 1,  // 0-based index
         explain: { id: "Penjelasan", en: "Explanation" }
       },
       // ... 2 soal lagi
     ]
   }
   ```

2. **Tambahkan media files**
   - Gambar: `public/media/{slug}.webp` (format WebP, optimized)
   - Audio: `public/media/{slug}.mp3` (MP3 atau M4A)

3. **Generate QR code baru**
   ```bash
   npm run generate:qr
   ```

---

## 🎨 Tema & Styling

Aplikasi menggunakan **tema Nusantara** dengan color palette:
- **Indigo** (#4F46E5) - Primary color
- **Brick Red** (#B91C1C) - Accent
- **Gold** (#F59E0B) - Highlights
- **Pandan Green** (#10B981) - Success
- **Cream** (#FEF3C7) - Background

Edit `tailwind.config.ts` untuk customize colors.

---

## 📲 Generate QR Codes

Untuk cetak kartu fisik, generate QR codes:

```bash
npm run generate:qr
```

QR codes akan disimpan di `public/qrs/` dalam format PNG (300x300px).

**Environment Variable:**
```bash
# .env.local
NEXT_PUBLIC_BASE_URL=https://cardtara-nus.vercel.app
```

Ganti dengan domain production Anda sebelum generate QR untuk cetak.

---

## 🚢 Deploy ke Vercel

1. **Push project ke GitHub**

2. **Import ke Vercel**
   - Login ke [vercel.com](https://vercel.com)
   - Import repository
   - Vercel auto-detect Next.js

3. **Set Environment Variables** (optional)
   ```
   NEXT_PUBLIC_BASE_URL=https://cardtara-nus.vercel.app
   ```

4. **Deploy!**
   - Build otomatis
   - 104 static pages generated (52 kartu × 2 bahasa)

---

## 🧪 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run development server |
| `npm run build` | Build production bundle |
| `npm start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run generate:qr` | Generate QR codes |

---

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **QR Library**: qrcode 1.5.4
- **Font**: Google Fonts (Inter)
- **Deployment**: Vercel (recommended)

---

## 📝 TODO (Optional Enhancements)

- [ ] Tambah semua 52 kartu dengan konten lengkap
- [ ] Scanner QR via browser (optional `/scan` page)
- [ ] Save skor ke localStorage per user
- [ ] Add sound effects untuk quiz
- [ ] Analytics tracking
- [ ] Print-ready card templates (PDF)

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Credits

- **UI Design**: Inspired by Indonesian cultural aesthetics
- **Content**: Indonesian cultural heritage
- **Built with**: ❤️ for preserving Nusantara culture

---

## 📧 Support

Untuk pertanyaan atau issues, silakan buka issue di GitHub repository.

---

**Lestarikan budaya, satu kartu pada satu waktu** 🇮🇩✨
