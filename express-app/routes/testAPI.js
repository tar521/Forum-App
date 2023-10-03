const express = require('express');
const getTest = require('../controllers/testAPIController.js')

const router = express.Router();

router.get('/', getTest)

export default router;