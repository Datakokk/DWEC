const http = require('http')

http.createServer(function(req, res){
  res.end('Hello WORLD mundial');
}).listen(3000, () =>console.log('server on port 3000 jejejeje'))

/* function hello(text){
  console.log(text);
}

hello("caminando por javascript"); */