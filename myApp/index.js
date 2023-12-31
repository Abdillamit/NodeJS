const http = require('http');

const server = http.createServer((require, response) => {
  //require - Менен срооу жонотобуз ! 
  //response - Менен срооуго жооп алабыз ! 
  console.log(require.url);

  response.write('<h1>Hello My Server!</h1>')
  response.write('<h1>Hello World!</h1>')
  response.write('<h1>Hello Abdillamit!</h1>')
  response.end()
})


server.listen(3000, () => {
  console.log('Server has been started on port:3000');
})
