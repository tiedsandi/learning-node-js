const path = require('path');
const fs = require('fs');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  const message = req.body.title;

  fs.writeFile('message.txt', message, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    res.redirect('/');
  });
});

module.exports = router;
