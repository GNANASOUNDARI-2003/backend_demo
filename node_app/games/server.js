const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath = '';

  if (req.url === '/') {
    filePath = 'in.html';
  } else if (req.url === '/about') {
    filePath = 'about.html';
  } else if (req.url === '/home') {
    filePath = 'home.html';
  } else if (req.url === '/result') {
    filePath = 'result.html';
  } 
  else {
    res.statusCode = 404;
    res.end('Page Not Found');
    return;
  }

  // Read the HTML file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(' Internal Server Error!!!');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(4000, () => {
  console.log(' Server running at http://localhost:4000');
});