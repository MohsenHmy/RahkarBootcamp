const express = require('express');
const { addBook } = require('../controllers/book.controller');

const router = express.Router()

router.post('/addBook', addBook)
      .post('/getAll', joinedTables);

module.exports = router
