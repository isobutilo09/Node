const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/users' && method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    return fs.readFile('users.txt', 'utf8', (err, data) => {
      res.write('<html>');
      res.write('<head><title>Assignment 1</title></head>');
      res.write('<body><ul>');
      if (err || !data.trim()) {
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
      } else {
        const users = data.trim().split('\n');
        users.forEach(user => {
          res.write(`<li>${user}</li>`);
        });
      }
      res.write('</ul></body>');
      res.write('</html>');
      return res.end();
    });
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
      fs.appendFile('users.txt', username + '\n', err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>404 Not Found</title></head>');
  res.write('<body><h1>Page not found</h1></body>');
  res.write('</html>');
  res.end();
};

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';