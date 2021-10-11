const EntriesRepository = require('../repositories/EntriesRepository');
const ExitsRepository = require('../repositories/ExitsRepository');

class EntriesAndExitsController {
  async index(req, res) {
    const {
      order, limit, initial_date, final_date, type_date,
    } = req.query;

    const [initialDate, finalDate] = [initial_date, final_date].map((date) => {
      if (new Date(date).toString() === 'Invalid Date') {
        return false;
      }

      const [newDate] = new Date(date).toISOString().split('T');

      return newDate;
    });

    const entries = await EntriesRepository.findAll({
      order, limit, initialDate, finalDate, type_date,
    });

    const exits = await ExitsRepository.findAll({
      order, limit, initialDate, finalDate, type_date,
    });

    res.status(200).json({ entries, exits });
  }
}

module.exports = new EntriesAndExitsController();
