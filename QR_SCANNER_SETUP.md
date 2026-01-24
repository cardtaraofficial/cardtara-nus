# Install jsQR untuk QR Code Detection

## Untuk Production QR Scanner

Jika ingin QR scanner berfungsi untuk scan actual QR codes, install library **jsQR**:

```bash
npm install jsqr
```

Lalu uncomment kode di `app/[lang]/scan/page.tsx`:

```typescript
// Line ~10
import jsQR from "jsqr";

// Line ~100 di function scanQRCode()
const code = jsQR(imageData.data, imageData.width, imageData.height);

if (code && code.data) {
    // Extract slug from URL
    const urlMatch = code.data.match(/\/k\/([A-Z0-9]+)$/i);
    if (urlMatch) {
        const slug = urlMatch[1];
        stopScanning();
        router.push(`/${locale}/k/${slug}`);
    }
}
```

## Untuk Testing Tanpa QR Fisik

Gunakan fitur **"Input Manual Card Slug"** yang sudah tersedia di halaman `/scan`.

## Alternatif Library

- **html5-qrcode**: Lebih user-friendly, built-in UI
- **zxing-js**: Cross-platform barcode scanner
