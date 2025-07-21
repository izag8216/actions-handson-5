const express = require('express');
const _ = require('lodash');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const data = {
    message: 'Hello from Cache Demo!',
    timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    randomNumbers: _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
