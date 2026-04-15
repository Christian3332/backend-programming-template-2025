const gacha_service = require('./gacha-service');

async function get_prizes(req, res, next) {
  try {
    const result = await gacha_service.get_prizes();
    return res.status(200).json(result);
  } catch (e) { next(e); }
}

async function play_gacha(req, res, next) {
  try {
    const { user_id, nama_user } = req.body;
    if (!user_id || !nama_user) return res.status(400).json({ error: 'Input tidak lengkap' });

    const result = await gacha_service.play_gacha(user_id, nama_user);
    const code = result.error ? 422 : 200;
    return res.status(code).json(result);
  } catch (e) { next(e); }
}

async function get_history(req, res, next) {
  try {
    const { user_id } = req.params;
    const result = await gacha_service.get_history(user_id);
    return res.status(200).json(result);
  } catch (e) { next(e); }
}

async function get_winners(req, res, next) {
  try {
    const result = await gacha_service.get_winners_list();
    return res.status(200).json(result);
  } catch (e) { next(e); }
}

async function get_all_logs(req, res, next) {
  try {
    const history = await gacha_service.get_complete_history();
    return res.status(200).json(history);
  } catch (e) { next(e); }
}

module.exports = { get_prizes, play_gacha, get_history, get_winners, get_all_logs, };