
// 간단한 응답 메시지 작성

// 웹 서버를 생성하고 실행합니다.

require('http').createServer((request,response) => {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('<h1>Hello Web Server With Node</h1>')
}).listen(8080, () =>{
    console.log('Server Running')
})