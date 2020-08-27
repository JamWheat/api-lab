var express = require('express');
var router = express.Router();
const gamesCtrl = require('../controller/api/games')

router.get('/games', gamesCtrl.index)
router.get('/games/:id', gamesCtrl.show)
router.post('/games/', gamesCtrl.new)
router.put('/games/:id', gamesCtrl.update)
router.delete('/games/:id', gamesCtrl.delete)

module.exports = router;
