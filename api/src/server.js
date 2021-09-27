const express = require('express');
require('express-async-errors');

const { router } = require('./routes');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(PORT, () => console.log(`🔥 Server started at http://localhost:${PORT}`));
