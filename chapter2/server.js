// 모듈을 추가합니다.
let http = require('http');

// 웹 서버를 만들고 실행합니다.

http.createServer(function (request,response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('<h1>Hellow World</h1>')
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273')
})