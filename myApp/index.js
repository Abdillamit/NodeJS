const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-type": "text/html" })
    res.end(`
      <h2>Send Name</h2>
      <form method="post" action="/">
        <input name="name"  placeholder="Enter your name" />
        <button type="submit">Send name</button>
      </form>
    `)
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
