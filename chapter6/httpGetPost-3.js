
let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
    if(req.method === 'GET'){
        fs.readFile('HTML2.html', (err, data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }else if(req.method === 'POST'){
        req.on('data' , (data) => {
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end('<h1>'+ data + '</h1>')
        })
    }
}).listen(8080, () => {
    console.log('Http Running at http://127.0.0.1:8080')
})