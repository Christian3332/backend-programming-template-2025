const express = require('express');
const router = express.Router();
const gacha_controller = require('./gacha-controller');

module.exports = (app) => {
  app.use('/gacha', router);

  router.get('/prizes', gacha_controller.get_prizes);
  router.get('/winners', gacha_controller.get_winners);
  router.get('/history/:user_id', gacha_controller.get_history);
  router.post('/', gacha_controller.play_gacha);
  router.get('/all-history', gacha_controller.get_all_logs);
};