const express = require('express');
const createReader = require('../controllers/reader')

const readerRouter = express.Router();

readerRouter.post('/', createReader);

module.exports = readerRouter;