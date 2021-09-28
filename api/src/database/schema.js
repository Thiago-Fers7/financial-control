const pg = require('pg');
const pgtools = require('pgtools');

async function createTables({ reset }) {
  // Database / postgre info
  const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'financial_control',
  });

  // Checking if the database exists
  try {
    await client.connect();
  } catch (error) {
    // if not exists, create new database
    await pgtools.createdb({
      host: 'localhost',
      port: 5432,
      user: 'root',
      password: 'root',
    }, 'financial_control', ((err) => {
      if (err) {
        return console.error('Database already exists');
      }

      console.log('Database created!');
    }));
  }

  if (reset) {
    await client.query('DROP TABLE IF EXISTS exits CASCADE');
    await client.query('DROP TABLE IF EXISTS entries CASCADE');
    console.log('Reseted tables');
  }

  await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await client.query(`
    CREATE TABLE IF NOT EXISTS entries (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      value real NOT NULL,
      due_date timestamp DEFAULT current_timestamp,
      updated_at timestamp NOT NULL DEFAULT current_timestamp,
      created_at timestamp NOT NULL DEFAULT current_timestamp
  )`);

  await client.query(`
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

  await client.end();
}

module.exports = { createTables };
