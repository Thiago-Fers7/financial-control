const express = require('express');
require('express-async-errors');
const { createTables } = require('./database/schema');

const { router } = require('./routes');

const PORT = 3333;

// Create Tables - reset: true for reset tables, false for not reset
createTables({ reset: false });

const app = express();

app.use(express.json());
app.use(router);

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));
