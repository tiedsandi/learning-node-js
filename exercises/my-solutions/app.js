const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>all</title></head>');
    res.write(
      '<body><h1>Haloo</h1><form action="/create-user" method="POST"><input type="text" name="user-name"> <button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>this is users page</title></head>');
    res.write('<body><ul><li>John doe</li><li>Jane doe</li></ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      console.log(message);
    });
  }
});

server.listen(3000);
