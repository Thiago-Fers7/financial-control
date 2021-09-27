const pg = require('pg');
const pgtools = require('pgtools');

async function createTables({ drop }) {
  // Delete to table
  if (drop) {
    pgtools.dropdb({
      host: 'localhost',
      port: 5432,
      user: 'root',
      password: 'root',
    }, 'financial_control', (err) => {
      if (err) {
        return console.log('Database not exists');
      }
      console.log('Database deleted');
    });

    return;
  }

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

  await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  await client.query(`
    CREATE TABLE IF NOT EXISTS entries (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      value real NOT NULL
  )`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS exits (
      id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      description VARCHAR NOT NULL,
      value real NOT NULL
    )
  `);

  await client.end();
}

module.exports = { createTables };
