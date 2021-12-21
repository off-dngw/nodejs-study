
const http = require('http');

// 서버 객체를 생성합니다.
let server = http.createServer()

// server 객체에 이벤트를 연결합니다.

server.on('request', () => {
    console.log('Request On')
})

server.on('close', () =>{
    console.log('Close On')
})

// listen() 메소드를 실행합니다.
server.listen(8080)
