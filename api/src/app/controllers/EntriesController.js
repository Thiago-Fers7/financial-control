const EntriesRepository = require('../repositories/EntriesRepository');

class EntriesController {
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

    res.status(200).json(entries);
  }

  async show(req, res) {
    const { id } = req.params;

    const entrie = await EntriesRepository.findById(id);

    if (!entrie) {
      return res.status(404).json({ error: 'Entrie not found' });
    }

    res.status(200).json(entrie);
  }

  async store(req, res) {
    const {
      name, description, value, due_date,
    } = req.body;

    if (!name || !description || (!value && value !== 0) || !due_date) {
      return res.status(400).json({ error: 'Informe o nome, descrição, data de vencimento e valor antes de continuar!' });
    }

    if (!Number(value) && Number.isNaN(+value) && value !== 0) {
      return res.status(400).json({ error: 'Valor digitado não é válido!' });
    }

    const entrie = await EntriesRepository.create({
      name, description, value, due_date,
    });

    res.status(200).json(entrie);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, description, value, due_date,
    } = req.body;

    if (!name || !description || !value || !due_date) {
      return res.status(400).json({ error: 'Informe o nome, descrição, data de vencimento e valor antes de continuar!' });
    }

    if (!Number(value)) {
      return res.status(400).json({ error: 'Valor digitado não é válido!' });
    }

    const entrieUpdated = await EntriesRepository.update(id, {
      name, description, value, due_date,
    });

    res.status(200).json(entrieUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;

    const deleteOp = await EntriesRepository.delete(id);
    if (typeof deleteOp === 'string') {
      return res.status(404).json({ error: deleteOp });
    }

    res.sendStatus(204);
  }
}

module.exports = new EntriesController();
