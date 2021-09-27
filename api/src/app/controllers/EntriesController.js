const EntriesRepository = require('../repositories/EntriesRepository');

class EntriesController {
  async index(req, res) {
    const { order } = req.query;

    const entries = await EntriesRepository.findAll(order);

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
    const { name, description, value } = req.body;

    if (!name || !description || !value) {
      return res.status(400).json({ error: 'Informe o nome, descrição e valor antes de continuar!' });
    }

    if (!Number(value)) {
      return res.status(400).json({ error: 'Valor digitado não é válido!' });
    }

    const entrie = await EntriesRepository.create({ name, description, value });

    res.status(200).json({ entrie });
  }
}

module.exports = new EntriesController();
