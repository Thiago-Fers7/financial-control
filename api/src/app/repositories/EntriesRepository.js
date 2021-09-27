const db = require('../../database/index');

class EntriesRepository {
  async findAll(order = 'asc') {
    const direction = order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT * FROM entries ORDER BY name ${direction}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM entries WHERE id = $1', [id]);

    return row;
  }

  async create({ name, description, value }) {
    const [row] = await db.query(`
      INSERT INTO entries (
        name, description, value
      ) values (
        $1, $2, $3
      )

      RETURNING *
    `, [name, description, value]);

    return row;
  }

  async update(id, { name, description, value }) {
    const [row] = await db.query(`
      UPDATE entries
      SET name = $1, description = $2, value = $3
      WHERE id = $4
      RETURNING *
   `, [name, description, value, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM entries WHERE id = $1', [id]);

    return deleteOp;
  }
}

module.exports = new EntriesRepository();
