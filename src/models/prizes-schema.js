module.exports = (mongoose) => {
  const prizeSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    quota: { type: Number, required: true },
    claimed: { type: Number, default: 0 },
  });
  return mongoose.model('Prize', prizeSchema);
};
