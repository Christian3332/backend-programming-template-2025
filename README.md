# Backend Programming Template (2025)

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

## Quiz Backend
**Christian Benizi Susilo/535250026**
Di sini saya buat sistem undian gacha pakai Node.js, Express, dan MongoDB. Intinya, user bisa coba keberuntungan buat dapet hadiah, tapi ada aturan mainnya biar nggak ada yang cheating.

**Fitur yang sudah jalan**
1. Gacha 30% Win Rate: Peluang menangnya saya set di 30%, sisanya ya "Zonk".
2. Limit 5x Sehari: Biar nggak dispam, satu user cuma boleh gacha 5 kali tiap hari. Kalau maksa gacha ke-6, bakal muncul error.
3. Cek Stok Hadiah: Kuota hadiah bakal berkurang tiap ada yang menang. Kalau kuota habis, user nggak bakal bisa menangin hadiah itu lagi.
4. Fitur Bonus - Riwayat Gacha: User bisa cek dia dapet apa aja selama ini lewat ID-nya.
5. Fitur Bonus - Sensor Nama: Biar privasi aman, daftar pemenang bakal saya sensor (Contoh: Christian jadi C*******n).

**Proses pembuatan**
1. Bikin Skema Database: Pertama, saya buat model di MongoDB buat nampung data prizes (hadiah) dan gachas (log transaksi).
2. Repository Pattern: Semua urusan "ngobrol" sama database saya pisahin di folder repository biar kode utamanya nggak berantakan dan lebih gampang di-maintain.
3. Logika Gacha: Di bagian service, saya buat hitungan random buat nentuin menang/kalah (peluang 30%), plus fungsi buat nyensor nama pemenang biar privasi aman.
4. Bikin Endpoint: Saya daftarin rute-rute URL-nya di Express supaya bisa ditembak lewat EchoAPI atau Postman.
5. Input Data Hadiah (Seeding): Saya buat script khusus (prizes-seeds.js) buat masukin 5 hadiah kuis (Emas, HP, Smartwatch, Voucher, Pulsa) ke database secara otomatis. Jadi pas aplikasi pertama kali jalan, data hadiahnya sudah siap dipakai gacha.

**API**

1. Main gacha(POST)
Untuk melakukan gacha
http://localhost:5000/api/gacha
pada body isi "user_id": "(isi kan user id)"
2. Cek sisa hadiah(GET)
Untuk melihat sisa hadiah
http://localhost:5000/api/gacha/prizes
3. Liat riwayat user
http://localhost:5000/api/gacha/history/:id
id diisi untuk id user
4. Daftar orang yang memenangkan (GET)
http://localhost:5000/api/gacha/winners
5. Riwayat semua user
http://localhost:5000/api/gacha/all-history
