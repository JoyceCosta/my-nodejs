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
      res.setHeader("Content-Type", "text/html");
			res.write("<html>");
			res.write("<head><title>Usuários</title></head>");
      res.write("<body><ul><li>Luffy</li><li>Zoro</li><li>Nami</li><li>Usopp</li><li>Sanji</li><li>Chopper</li><li>Robin</li><li>Franky</li><li>Brook</li></ul></body>");
			res.write("</html>");
			res.end();
   }
}); 

server.listen(3000);

