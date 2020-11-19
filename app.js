const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
   if (url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Tarefa 1</title></head>');
      res.write("<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Inscrever</button></form></body>");
      res.write("</html>");
      return res.end();
   }
   if (url === '/users') {
      res.setHeader("Content-Type", "text/html");
			res.write("<html>");
			res.write("<head><title>Usuários</title></head>");
      res.write("<body><ul><li>Luffy</li><li>Zoro</li><li>Nami</li><li>Usopp</li><li>Sanji</li><li>Chopper</li><li>Robin</li><li>Franky</li><li>Brook</li></ul></body>");
			res.write("</html>");
			return res.end();
   }
   //Eviar uma resposta HTML com algum texto
   if (url === '/create-user') {
     const body = [];
     req.on('data', chunk => {
       body.push(chunk);
     });
     req.on('end', () => {
       const parsedBody = Buffer.concat(body).toString();
       console.log(parsedBody.split('=')[1]); //username e oq for posto dentro
     });
     res.statusCode = 302;
     res.setHeader('Location', '/');
     res.end();
   }
}); 

server.listen(3000);

