const mongoose = require('mongoose');
const prizesSchemaFn = require('../../models/prizes-schema');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/demo-db';

async function seed() {
  try {
    console.log('Menghubungkan ke MongoDB...');
    await mongoose.connect(MONGODB_URI);

    const Prize = prizesSchemaFn(mongoose);

    console.log('Membersihkan data lama...');

    await Prize.deleteMany({});

    console.log('Memasukkan data hadiah baru...');
    await Prize.insertMany([
      { _id: 1, name: 'Emas 10 gram', quota: 1, claimed: 0 },
      { _id: 2, name: 'Smartphone X', quota: 5, claimed: 0 },
      { _id: 3, name: 'Smartwatch Y', quota: 10, claimed: 0 },
      { _id: 4, name: 'Voucher Rp100.000', quota: 100, claimed: 0 },
      { _id: 5, name: 'Pulsa Rp50.000', quota: 500, claimed: 0 },
    ]);

    console.log('Seeding Berhasil!');
  } catch (error) {
    console.error('Seeding Gagal:', error);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

seed();
