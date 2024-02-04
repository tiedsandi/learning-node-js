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
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      console.log(products);
      // fs.writeFile('data/product.json', JSON.stringify(products), (err) => {
      //   if (err) {
      //     console.error(err);
      //     return res.status(500).send('Internal Server Error');
      //   }
      // });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
