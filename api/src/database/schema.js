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
      due_date timestamp DEFAULT current_timestamp,
      updated_at timestamp NOT NULL DEFAULT current_timestamp,
      created_at timestamp NOT NULL DEFAULT current_timestamp
  )`);

  await db.query(`
    CREATE TABLE IF NOT EXISTS exits (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      value real NOT NULL,
      due_date timestamp DEFAULT current_timestamp,
      updated_at timestamp NOT NULL DEFAULT current_timestamp,
      created_at timestamp NOT NULL DEFAULT current_timestamp
    )
  `);
}

module.exports = { createTables };
