const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('in the middleware!');
  next(); // allows the req to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('that is middleware!');
  res.send('<h1>Helo from express!</h1>');
});

const server = http.createServer(app);

server.listen(3000);
