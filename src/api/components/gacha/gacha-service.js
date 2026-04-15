const gacha_repo = require('./gacha-repository');

// Fungsi Sensor Nama
function maskName(name) {
  if (!name) return '';
  const words = name.split(' ');
  return words
    .map((word) => {
      if (word.length <= 2) return word[0] + '*';
      return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
    })
    .join(' ');
}

async function get_prizes() {
  return gacha_repo.get_all_prizes();
}

async function play_gacha(user_id, nama_user) {
  const count = await gacha_repo.get_today_count(user_id);
  if (count >= 5) return { error: 'Jatah gacha hari ini habis (Maks 5x)!' };

  const prizes = await gacha_repo.get_available_prizes();
  const win = Math.random() < 0.3; // 30% Peluang Menang

  if (!win || prizes.length === 0) {
    await gacha_repo.create_gacha_log(user_id, nama_user, 'Zonk');
    return { status: 'Zonk', message: 'Maaf, belum beruntung!' };
  }

  const prize = prizes[Math.floor(Math.random() * prizes.length)];
  await gacha_repo.update_prize_claimed(prize._id);
  await gacha_repo.create_gacha_log(user_id, nama_user, prize.name);

  return { status: 'WIN', message: `Selamat! Kamu dapat ${prize.name}` };
}

async function get_history(user_id) {
  return gacha_repo.get_user_history(user_id);
}

async function get_winners_list() {
  const winners = await gacha_repo.get_all_winners();
  return winners.map((w) => ({
    nama_user: maskName(w.nama_user),
    hadiah_didapat: w.hadiah_didapat,
    tanggal_gacha: w.tanggal_gacha,
  }));
}

async function get_complete_history() {
  return gacha_repo.get_all_history();
}

module.exports = { get_prizes, play_gacha, get_history, get_winners_list, get_complete_history, };
