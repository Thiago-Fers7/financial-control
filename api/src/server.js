const express = require('express');
require('express-async-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const { createTables } = require('./database/schema');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const { router } = require('./routes');
// Create Tables - reset: true for reset tables, false for not reset
createTables({ reset: false });

const PORT = 3333;

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(cors);
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));
