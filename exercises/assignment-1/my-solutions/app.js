const express = require('express');

const app = express();

// perhatikan urutannya harus req, res, dan next
// app.use((req, res, next) => {
//   console.log('This is first middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('This is second middleware');
//   res.send('<h1>Hi from server</h1>');
// });

// perhatikan urutan route, jika /users di tulis setelah / maka tidak akan di proses, karena code mengcompile dari atas ke bawah
app.use('/users', (req, res, next) => {
  res.send('<ul><li>John doe</li><li>Jane doe</li></ul>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>This is home</h1>');
});

app.listen(3000);
