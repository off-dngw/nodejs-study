
// 서버를 생성 합니다.
const server = require('http').createServer();

// 서버를 실행 합니다.
    server.listen(8080, () =>{
        console.log('Server Running at Http://127.0.0.1:8080')
    })

// 10초후 함수를 실행 시킵니다.

    let test = () =>{
        //  서브를 종료합니다.
        server.close()
}
setTimeout(test, 10000)