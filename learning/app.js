const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('this always run!');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('that is middleware!');
  res.send('<h1>Add product things</h1>');
});

app.use('/', (req, res, next) => {
  console.log('that is middleware!');
  res.send('<h1>Helo from express!</h1>');
});

app.listen(3000);
