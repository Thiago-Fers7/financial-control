const db = require('../../database');

class ExitsRepository {
  async findAll(order = 'asc') {
    const direction = order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT * FROM exits ORDER BY name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM exits WHERE id = $1
    `, [id]);

    return row;
  }

  async create({ name, description, value }) {
    const [row] = await db.query(`
      INSERT INTO exits (
        name, description, value
      ) VALUES (
        $1, $2, $3
      )
      RETURNING *
    `, [name, description, value]);

    return row;
  }

  async update(id, { name, description, value }) {
    const [row] = await db.query(`
      UPDATE exits
      SET name = $1, description = $2, value = $3
      WHERE id = $4
      RETURNING *
    `, [name, description, value, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM exits WHERE id = $1', [id]);

    return deleteOp;
  }
}

module.exports = new ExitsRepository();
