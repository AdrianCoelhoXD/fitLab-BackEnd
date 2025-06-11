const express = require('express');
const { createGym, listGyms } = require('../controllers/gymController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createGym);
router.get('/', authMiddleware, listGyms);

module.exports = router;