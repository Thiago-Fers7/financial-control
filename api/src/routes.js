const { Router } = require('express');
const EntriesController = require('./app/controllers/EntriesController');

const router = Router();

router.get('/entries', EntriesController.index);

module.exports = { router };
