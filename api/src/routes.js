const { Router } = require('express');
const EntriesController = require('./app/controllers/EntriesController');
const ExitsController = require('./app/controllers/ExitsController');
const EntriesAndExitsController = require('./app/controllers/EntriesAndExitsController');

const router = Router();

// Entries
router.get('/entries', EntriesController.index);
router.get('/entries/:id', EntriesController.show);
router.post('/entries', EntriesController.store);
router.put('/entries/:id', EntriesController.update);
router.delete('/entries/:id', EntriesController.delete);

// Exits
router.get('/exits', ExitsController.index);
router.get('/exits/:id', ExitsController.show);
router.post('/exits', ExitsController.store);
router.put('/exits/:id', ExitsController.update);
router.delete('/exits/:id', ExitsController.delete);

// Entries and Exits
router.get('/entries-and-exits', EntriesAndExitsController.index);

module.exports = { router };
