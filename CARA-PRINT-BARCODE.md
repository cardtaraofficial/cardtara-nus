# 🏷️ Cara Membuat Barcode untuk Kartu Remi

## 📝 Langkah-langkah Lengkap

### 1. Generate Barcode
1. Buka file `barcode-generator.html` di browser
2. Barcode akan otomatis ter-generate untuk semua 52 kartu
3. Setiap kartu memiliki:
   - Nomor kartu (A, 2, 3, ..., K)
   - Simbol suit (♥♦♣♠)
   - Nama suku
   - Barcode (CARD_01 - CARD_52)

### 2. Print Barcode
**Opsi A: Print Langsung**
1. Klik tombol "Print Barcode" atau tekan `Ctrl+P`
2. Pilih printer Anda
3. Pastikan setting:
   - Paper size: A4
   - Orientation: Portrait
   - Margins: Default
4. Print!

**Opsi B: Save as PDF (Recommended)**
1. Klik tombol "Print Barcode" atau tekan `Ctrl+P`
2. Pilih "Microsoft Print to PDF" atau "Save as PDF"
3. Simpan file PDF
4. PDF bisa dicetak kapan saja atau dikirim ke print shop

### 3. Potong Barcode
1. Gunakan gunting atau paper cutter
2. Potong setiap barcode mengikuti kotak border
3. Sisakan sedikit margin agar rapi

### 4. Tempel ke Kartu Remi

#### Pemetaan Kartu:

**♥ HEARTS (Merah) - Kartu 1-13**
```
A♥  = CARD_01 = Batak Toba
2♥  = CARD_02 = Minangkabau
3♥  = CARD_03 = Aceh
4♥  = CARD_04 = Melayu Riau
5♥  = CARD_05 = Lampung
6♥  = CARD_06 = Rejang
7♥  = CARD_07 = Jambi (Batin)
8♥  = CARD_08 = Palembang
9♥  = CARD_09 = Komering
10♥ = CARD_10 = Bangka Belitung
J♥  = CARD_11 = Mentawai
Q♥  = CARD_12 = Nias
K♥  = CARD_13 = Gayo
```

**♦ DIAMONDS (Merah) - Kartu 14-26**
```
A♦  = CARD_14 = Jawa
2♦  = CARD_15 = Sunda
3♦  = CARD_16 = Betawi
4♦  = CARD_17 = Bali
5♦  = CARD_18 = Sasak
6♦  = CARD_19 = Madura
7♦  = CARD_20 = Tengger
8♦  = CARD_21 = Osing (Banyuwangi)
9♦  = CARD_22 = Baduy
10♦ = CARD_23 = Dayak Iban
J♦  = CARD_24 = Dayak Ngaju
Q♦  = CARD_25 = Dayak Kenyah
K♦  = CARD_26 = Banjar
```

**♣ CLUBS (Hitam) - Kartu 27-39**
```
A♣  = CARD_27 = Bugis
2♣  = CARD_28 = Makassar
3♣  = CARD_29 = Toraja
4♣  = CARD_30 = Mandar
5♣  = CARD_31 = Minahasa
6♣  = CARD_32 = Gorontalo
7♣  = CARD_33 = Sangir
8♣  = CARD_34 = Kaili
9♣  = CARD_35 = Muna
10♣ = CARD_36 = Buton
J♣  = CARD_37 = Maluku (Ambon)
Q♣  = CARD_38 = Ternate
K♣  = CARD_39 = Tidore
```

**♠ SPADES (Hitam) - Kartu 40-52**
```
A♠  = CARD_40 = Dani
2♠  = CARD_41 = Asmat
3♠  = CARD_42 = Sentani
4♠  = CARD_43 = Biak
5♠  = CARD_44 = Kamoro
6♠  = CARD_45 = Korowai
7♠  = CARD_46 = Sumba
8♠  = CARD_47 = Flores (Manggarai)
9♠  = CARD_48 = Timor (Atoni)
10♠ = CARD_49 = Alor
J♠  = CARD_50 = Rote
Q♠  = CARD_51 = Sabu
K♠  = CARD_52 = Bima
```

### 5. Tips Menempel

**Bahan yang Dibutuhkan:**
- 1 set kartu remi (52 kartu)
- Barcode yang sudah dicetak
- Gunting/paper cutter
- Lem kertas atau double tape
- Penggaris (optional, untuk hasil rapi)

**Cara Menempel:**
1. Bersihkan permukaan kartu dari debu
2. Tempelkan barcode di bagian belakang kartu (yang ada pattern)
3. Posisikan di tengah atau di pojok (sesuai selera)
4. Tekan dengan kuat agar menempel sempurna
5. Tunggu lem kering (jika pakai lem)

**Rekomendasi Posisi:**
- **Pojok atas**: Mudah di-scan, tidak menutupi design
- **Tengah**: Lebih mudah ditemukan
- **Pojok bawah**: Alternatif jika pojok atas sudah ada tulisan

### 6. Laminating (Optional)

Untuk hasil yang lebih tahan lama:
1. Setelah barcode ditempel, laminating seluruh kartu
2. Atau gunakan clear tape untuk melindungi barcode
3. Pastikan barcode tetap bisa di-scan (tidak terlalu glossy)

---

## 🎯 Quick Reference

| Suit | Warna | Range Kartu | Range Barcode | Region |
|------|-------|-------------|---------------|---------|
| ♥ Hearts | Merah | A - K | CARD_01 - CARD_13 | Sumatera |
| ♦ Diamonds | Merah | A - K | CARD_14 - CARD_26 | Jawa, Bali, Kalimantan |
| ♣ Clubs | Hitam | A - K | CARD_27 - CARD_39 | Sulawesi, Maluku |
| ♠ Spades | Hitam | A - K | CARD_40 - CARD_52 | Papua, Nusa Tenggara |

---

## ❓ FAQ

**Q: Barcode tidak bisa di-scan?**
A: Pastikan:
- Barcode dicetak dengan kualitas baik (tidak blur)
- Tidak ada lipatan atau kerusakan
- Lighting cukup saat scanning
- Kamera fokus ke barcode

**Q: Bisa pakai stiker?**
A: Bisa! Malah lebih praktis. Print di kertas stiker A4.

**Q: Ukuran barcode terlalu besar/kecil?**
A: Buka `barcode-generator.html`, edit di console:
```javascript
// Ubah width dan height di fungsi JsBarcode
width: 2,  // ubah angka ini (1-3)
height: 60 // ubah angka ini (40-80)
```

**Q: Bisa print di kertas foto?**
A: Bisa! Hasilnya lebih bagus dan tahan lama.

---

## 📦 File yang Dibutuhkan

- `barcode-generator.html` - Generator barcode
- `data/tribes.js` - Database suku (sudah include)
- Browser modern (Chrome/Firefox/Edge)
- Printer atau akses ke print shop

---

**Selamat membuat! 🎉**
