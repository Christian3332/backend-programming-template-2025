const { Prize, Gacha } = require('../../../models');

async function get_all_prizes() {
  return Prize.find();
}

async function get_available_prizes() {
  return Prize.find({ $expr: { $lt: ['$claimed', '$quota'] } });
}

async function update_prize_claimed(id) {
  return Prize.updateOne({ _id: id }, { $inc: { claimed: 1 } });
}

async function create_gacha_log(user_id, nama_user, hadiah) {
  return Gacha.create({ user_id, nama_user, hadiah_didapat: hadiah });
}

async function get_today_count(user_id) {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  return Gacha.countDocuments({ user_id, tanggal_gacha: { $gte: start } });
}

async function get_user_history(user_id) {
  return Gacha.find({ user_id }).sort({ tanggal_gacha: -1 });
}

async function get_all_winners() {
  return Gacha.find({ hadiah_didapat: { $ne: 'Zonk' } }).sort({ tanggal_gacha: -1 });
}

async function get_all_history() {
  return Gacha.find().sort({ tanggal_gacha: -1 });
}

module.exports = {
  get_all_prizes,
  get_available_prizes,
  update_prize_claimed,
  create_gacha_log,
  get_today_count,
  get_user_history,
  get_all_winners,
  get_all_history,
};