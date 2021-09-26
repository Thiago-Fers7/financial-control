const EntriesRepository = require('../repositories/EntriesRepository');

class EntriesController {
  async index(req, res) {
    const { order } = req.query;

    const entries = await EntriesRepository.index(order);

    res.status(200).json(entries);
  }
}

module.exports = new EntriesController();
