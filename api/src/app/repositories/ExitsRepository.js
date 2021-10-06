const db = require('../../database');

class ExitsRepository {
  async findAll({
    order = 'desc', limit = 'ALL', initialDate, finalDate, type_date,
  }) {
    const direction = order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const maxReturned = Number(limit) ? limit : 'ALL';
    let queryDate = '';

    const typeDate = type_date === 'due_date' ? 'due_date' : 'created_at';

    if (initialDate && finalDate) {
      queryDate = `WHERE ${typeDate} >= '${initialDate}' AND ${typeDate} <= '${finalDate}'`;
    } else if (finalDate && !initialDate) {
      queryDate = `WHERE ${typeDate} <= '${finalDate}'`;
    } else if (initialDate) {
      queryDate = `WHERE ${typeDate} >= '${initialDate}'`;
    }

    const rows = await db.query(`
      SELECT * FROM exits
      ${queryDate}
      ORDER BY ${typeDate} ${direction} 
      LIMIT ${maxReturned}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM exits WHERE id = $1
    `, [id]);

    return row;
  }

  async create({
    name, description, value, due_date,
  }) {
    const [row] = await db.query(`
      INSERT INTO exits (
        name, description, value, due_date
      ) VALUES (
        $1, $2, $3, $4
      )
      RETURNING *
    `, [name, description, value, due_date]);

    return row;
  }

  async update(id, {
    name, description, value, due_date,
  }) {
    const [row] = await db.query(`
      UPDATE exits
      SET name = $1, description = $2, value = $3, due_date = $4, updated_at = CURRENT_DATE
      WHERE id = $5
      RETURNING *
    `, [name, description, value, due_date, id]);

    return row;
  }

  async delete(id) {
    let deleteOp;

    try {
      deleteOp = await db.query('DELETE FROM exits WHERE id = $1', [id]);
    } catch (err) {
      return 'Exit not found';
    }

    return deleteOp;
  }
}

module.exports = new ExitsRepository();
