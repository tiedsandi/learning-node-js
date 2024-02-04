const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile('data/products.json', JSON.stringify(products), (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Internal Server Error');
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
