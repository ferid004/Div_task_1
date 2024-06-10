const http = require('http');
const {
    isFibonacci,
    isPalindrom
  } = require('./utils/fibonaci');

const PORT=3000

const routes = {
  '/': 'Ana səhifə',
  '/about': 'Haqqımızda',
  '/contact': 'Əlaqə'
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (routes[req.url]) { 
    res.statusCode = 200;
    res.end(routes[req.url]);
  } else {
    res.statusCode = 404;
    res.end('Tapılmadı');
  }
});


console.log(isFibonacci(21));

console.log(isPalindrom("ana"));


server.listen(PORT, () => {
  console.log(`Server ${PORT} portunda işlədir...`);
});
