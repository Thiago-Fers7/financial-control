const EntriesRepository = require('../repositories/EntriesRepository');
const ExitsRepository = require('../repositories/ExitsRepository');

const { minDate } = require('../../utils/transformDate');

class EntriesAndExitsController {
  async index(req, res) {
    const {
      order, limit, initial_date, final_date, type_date,
    } = req.query;

    let initialDate = initial_date;
    let finalDate = final_date;

    if (!initialDate && finalDate) {
      finalDate = minDate(finalDate);
    } else if (initialDate && finalDate) {
      initialDate = minDate(initialDate);
      finalDate = minDate(finalDate);
    }

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
