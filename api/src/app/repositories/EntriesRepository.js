const db = require('../../database/index');
const { getNext30Days } = require('../../utils/transformDate');

class EntriesRepository {
  async findAll({
    order = 'desc', limit = 'ALL', initialDate, finalDate, type_date,
  }) {
    const direction = order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const maxReturned = Number(limit) ? limit : 'ALL';
    let queryDate = '';

    const typeDate = type_date === 'due_date' ? 'due_date' : 'created_at';

    if (initialDate && finalDate) {
      queryDate = `WHERE ${typeDate} BETWEEN '${initialDate}' AND '${finalDate}'`;
    } else if (finalDate) {
      queryDate = `WHERE ${typeDate} BETWEEN '${finalDate}' AND '${getNext30Days()}'`;
    }

    const rows = await db.query(`
      SELECT * FROM entries
      ${queryDate}
      ORDER BY ${typeDate} ${direction} 
      LIMIT ${maxReturned}
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM entries WHERE id = $1', [id]);

    return row;
  }

  async create({
    name, description, value, due_date,
  }) {
    const [row] = await db.query(`
      INSERT INTO entries (
        name, description, value, due_date
      ) values (
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
      UPDATE entries
      SET name = $1, description = $2, value = $3, due_date = $4, updated_at = CURRENT_DATE
      WHERE id = $5
      RETURNING *
   `, [name, description, value, due_date, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM entries WHERE id = $1', [id]);

    return deleteOp;
  }
}

module.exports = new EntriesRepository();
