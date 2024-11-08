const express = require('express');
const bookController = require('../Controllers/bookController');
const router = express.Router();

router.post('/addBook', bookController.addBook);
router.get('/books', bookController.getBooks);
router.get('/exportBooks', bookController.exportBooks);

module.exports = router;
