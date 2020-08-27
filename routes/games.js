var express = require('express');
var router = express.Router();
const gamesCtrl = require('../controller/api/games')

router.get('/', gamesCtrl.index)
router.get('/:id', gamesCtrl.show)
router.post('/', gamesCtrl.new)
router.put('/:id', gamesCtrl.update)
router.delete('/:id', gamesCtrl.delete)

module.exports = router;
