# Perancangan dan Analisis Algoritma
Tugas-01

## Kajian Singkat Algoritma

### 1. Tipe Data yang Digunakan
- **numbers** → Array yang menyimpan angka-angka yang dimasukkan pengguna.
- **total** → Variabel dengan tipe data number yang menyimpan hasil penjumlahan.
- **count** → Variabel number yang menghitung jumlah angka yang telah dimasukkan.
- **input** → String yang dikonversi menjadi number menggunakan `parseFloat()`.

### 2. Variabel dan Struktur Data
- `readline.createInterface()` digunakan untuk membaca input dari terminal.
- `numbers.push(number)` menyimpan angka yang valid dalam array.
- `total += number` menghitung total nilai dari lima angka yang dimasukkan.

### 3. Pengulangan dan Rekursi
- Algoritme menggunakan rekursi dengan fungsi `initNumber()`.
- Jika pengguna telah memasukkan lima angka, program menampilkan total dan menghentikan input dengan `rl.close()`.
- Jika input tidak valid (bukan angka), fungsi akan meminta input ulang tanpa menambah jumlah iterasi.

### 4. Validasi Input
- `parseFloat(input)` digunakan untuk mengubah string input menjadi angka.
- `isNaN(number)` digunakan untuk memastikan input adalah angka yang valid.
- Jika input bukan angka, program menampilkan pesan error dan meminta input ulang.

### 5. Output
- Hasil akhir berupa jumlah total lima angka yang dicetak ke terminal menggunakan `console.log()`.

## Kebutuhan
- [Node](https://nodejs.org/) (Pastikan menggunakan versi yang sesuai)

## Cara Penggunaan
- Menggunakan git => `git clone https://github.com/renofinsa/perancangan-dan-analisis-algoritma-tugas-01.git`
- Atau bisa download file `initNumber.js` nya saja
- Buka prompt/terminal lalu arahkan ke file `initNumber.js` yang telah didownload sebelumnya
- Lalu jalankan menggunakan Node (*version), dengan cara `node initNumber.js`
