const http = require('http');
const path = require('path');
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" });

    if (req.url === '/') {
      fs.readFile(path.join(__dirname, 'template', 'index.html'), 'utf-8', (err, content) => {
        if (err) throw err
        res.end(content)
      })
    } else if (req.url === '/about') {
      fs.readFile(path.join(__dirname, 'template', 'about.html'), 'utf-8', (err, content) => {
        if (err) throw err
        res.end(content)
      })
    } else if (req.url === '/contact') {
      fs.readFile(path.join(__dirname, 'template', 'contact.html'), 'utf-8', (err, content) => {
        if (err) throw err
        res.end(content)
      })
    } else if (req.url === '/api/admin') {
      res.writeHead(200, { "Content-type": "text/json" });
      const admin = { name: "Abdillamit", surname: "Mamytov", job: "Software enginer" }
      res.end(JSON.stringify(admin))
    }
  } else if (req.method === "POST") {
    const body = []
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" })

    req.on('data', date => {
      body.push(Buffer.from(date))
    })

    req.on('end', () => {
      const massage = body.toString().split('=')[1]
      res.end(`Name  ${massage}`)
    })
  }
})


server.listen(3000, () => {
  console.log('Server has been started on port:3000');
})
