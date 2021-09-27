const { Router } = require('express');
const EntriesController = require('./app/controllers/EntriesController');

const router = Router();

router.get('/entries', EntriesController.index);
router.get('/entries/:id', EntriesController.show);
router.post('/entries', EntriesController.store);
router.put('/entries/:id', EntriesController.update);
router.delete('/entries/:id', EntriesController.delete);

module.exports = { router };
