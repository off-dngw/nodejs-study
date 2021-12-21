
let http = require('http')
let fs = require('fs')
let url = require('url')

// 서버 생성 및 실행
http.createServer((req, res) =>{
    let pathName = url.parse(req.url).pathname

    // 페이지를 구분합니다.
    if(pathName === '/'){
        // Index.html 파일을 읽습니다.
        fs.readFile('Index.html', (err, data)=> {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }else if(pathName === '/OtherPage'){
        // OtherPage.html을 읽습니다.
        fs.readFile('other.html', (err, data) =>{
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }
}).listen(8080, () =>{
    console.log('Server Running at http://127.0.0.1:8080')
})

