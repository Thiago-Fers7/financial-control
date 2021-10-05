const db = require('../../database/index');
// const { getNext30Days } = require('../../utils/transformDate');

class EntriesRepository {
  async findAll({
    order = 'desc', limit = 'ALL', initialDate, finalDate, type_date,
  }) {
    const direction = order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const maxReturned = Number(limit) ? limit : 'ALL';
    let queryDate = '';

    const typeDate = type_date === 'created_at' ? 'created_at' : 'due_date';

    if (initialDate && finalDate) {
      // Retorna o valor entre as datas desejadas a partir da menor data,
      // ou seja, a data inicial deve ser menor que a data final
      queryDate = `WHERE ${typeDate} >= '${initialDate}' AND ${typeDate} <= '${finalDate}'`;
    } else if (finalDate && !initialDate) {
      // Retorna o valor a partir do mais antigo informado pelo usuário (finalDate)
      queryDate = `WHERE ${typeDate} <= '${finalDate}'`;
    } else if (initialDate) {
      // Retorna o valor a partir do mais novo informado pelo usuário (initialDate)
      queryDate = `WHERE ${typeDate} >= '${initialDate}'`;
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
    let deleteOp;
    try {
      deleteOp = await db.query('DELETE FROM entries WHERE id = $1', [id]);
    } catch (err) {
      return 'Entry not found';
    }

    return deleteOp;
  }
}

module.exports = new EntriesRepository();
