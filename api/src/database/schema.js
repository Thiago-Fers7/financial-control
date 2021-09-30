const db = require('./index');

async function createTables({ reset }) {
  if (reset) {
    await db.query('DROP TABLE IF EXISTS exits CASCADE');
    await db.query('DROP TABLE IF EXISTS entries CASCADE');
    console.log('Reseted tables');
  }

  await db.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await db.query(`
    CREATE TABLE IF NOT EXISTS entries (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      value real NOT NULL,
      due_date date DEFAULT CURRENT_DATE,
      updated_at date NOT NULL DEFAULT CURRENT_DATE,
      created_at date NOT NULL DEFAULT CURRENT_DATE
  )`);

  await db.query(`
    CREATE TABLE IF NOT EXISTS exits (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      value real NOT NULL,
      due_date date DEFAULT CURRENT_DATE,
      updated_at date NOT NULL DEFAULT CURRENT_DATE,
      created_at date NOT NULL DEFAULT CURRENT_DATE
    )
  `);
}

module.exports = { createTables };
