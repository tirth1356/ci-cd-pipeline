const express = require('express');
const routes = require('./source/routes/route.js');

const app = express();
const PORT = process.env.PORT || 30002;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, HOST, function () {
  console.log(`Server started and running on ${PORT}`);
});

module.exports = app;
