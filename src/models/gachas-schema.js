module.exports = (mongoose) => {
  const gachaSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    nama_user: { type: String, required: true },
    hadiah_didapat: { type: String, default: 'Zonk' },
    tanggal_gacha: { type: Date, default: Date.now },
  });
  return mongoose.model('Gacha', gachaSchema);
};
