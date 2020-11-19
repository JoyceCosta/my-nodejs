const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
   if (url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Tarefa 1</title></head>');
      res.write("<body><p>Bienvenue!</p></body>");
      res.write("</html>");
      return res.end();
   }
   if (url === '/users') {

   }
}); 

server.listen(3000);

