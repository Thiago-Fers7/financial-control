const ExitsRepository = require('../repositories/ExitsRepository');

class ExitsController {
  async index(req, res) {
    const { order } = req.query;

    const exits = await ExitsRepository.findAll(order);

    res.status(200).json(exits);
  }

  async show(req, res) {
    const { id } = req.params;

    const exit = await ExitsRepository.findById(id);

    if (!exit) {
      return res.status(404).json({ error: 'Exit not found' });
    }

    res.status(200).json(exit);
  }

  async store(req, res) {
    const { name, description, value } = req.body;

    if (!name || !description || !value) {
      return res.status(400).json({ error: 'Informe o nome, descrição e valor antes de continuar!' });
    }

    if (!Number(value)) {
      return res.status(400).json({ error: 'Valor digitado não é válido!' });
    }

    const exit = await ExitsRepository.create({ name, description, value });

    res.status(200).json(exit);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, description, value } = req.body;

    if (!name || !description || !value) {
      return res.status(400).json({ error: 'Informe o nome, descrição e valor antes de continuar!' });
    }

    if (!Number(value)) {
      return res.status(400).json({ error: 'Valor digitado não é válido!' });
    }

    const exitUpdated = await ExitsRepository.update(id, { name, description, value });

    res.status(200).json(exitUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;

    await ExitsRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new ExitsController();