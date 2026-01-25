# Generate QR Code - Single Card

## Generate QR Code untuk Kartu AS

```bash
npx tsx scripts/generate-single-qr.ts
```

Hasil:
- File: `public/qrs/AS.png`
- URL di QR: `http://localhost:3000/id/k/AS`

## Ganti Kartu Lain

Edit `scripts/generate-single-qr.ts` line 6:
```typescript
const CARD_SLUG = "KH"; // ← Ganti jadi kartu lain
```

Contoh:
- `"AS"` = Ace of Spades
- `"KH"` = King of Hearts
- `"2S"` = 2 of Spades
- `"10D"` = 10 of Diamonds

## Custom URL (Production)

```bash
NEXT_PUBLIC_BASE_URL=https://cardtara-nus.vercel.app npx tsx scripts/generate-single-qr.ts
```

## Cara Pakai QR:
1. Generate QR dengan command di atas
2. Buka file `public/qrs/AS.png`
3. Print/scan QR code
4. Akan redirect ke halaman kartu AS
