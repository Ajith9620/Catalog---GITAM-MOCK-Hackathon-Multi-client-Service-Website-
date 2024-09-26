const express = require('express');
const { createService, getServices, getServiceById } = require('../controllers/serviceController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createService);
router.get('/', getServices);
router.get('/:id', getServiceById);

module.exports = router;
