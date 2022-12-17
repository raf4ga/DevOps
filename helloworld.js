const http = require('http');
const hostname = 'localhost';
const port = 8080;
const now = new Date();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write("Hola DevOps UNIR - Antonio Galvez!\n");
  res.write("Fecha del servidor: " + now.toGMTString());
  res.end('Adios!!!\n');
});

server.listen(port, hostname, () => {
  console.log(`El servidor es http://${hostname}:${port}/`);
});
