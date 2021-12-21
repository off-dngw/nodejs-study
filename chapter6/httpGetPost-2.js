let http = require('http')
let url = require('url')

http.createServer((req, res) =>{
    // 요청 매개변수를 추출합니다.
    let query = url.parse(req.url, true).query;

    // GET 요청 매개변수 출력
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>'+ JSON.stringify(query) +'</h1>')
})
.listen(8080,() =>{
    console.log('Server Running at http://127.0.0.1:8080')
})
// 실행후 ?name='aaa'&aaa=aaa
