const router = require('express').Router();

const ItemController = require('../controller/item-controller');
const HistoryController = require('../controller/history-controller');
const UserController = require('../controller/user-controller');

const authMiddleware = require('../middlewares/auth');

//apis item
router.get('/item', ItemController.getAll);

//apis history
router.get('/history', HistoryController.getAll);

//apis action
router.post('/rotate', authMiddleware.validateUser, UserController.rotate);



module.exports = router;