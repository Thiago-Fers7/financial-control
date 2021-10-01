const express = require('express');
require('express-async-errors');

const { createTables } = require('./database/schema');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const { router } = require('./routes');
// Create Tables - reset: true for reset tables, false for not reset
createTables({ reset: false });

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(cors);
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));
