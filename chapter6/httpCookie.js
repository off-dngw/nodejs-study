// 쿠키 저장 및 출력

let http = require('http');

http.createServer((req, res) => {
    let date = new Date();
    date.setDate(date.getDate() + 7);

    // 쿠키를 입력합니다.
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' :[
            'breakfast = toast; Expires =' + date.toUTCString(),
            'dinner = chicken'
        ]
    })
    res.end('<h1>'+ req.headers.cookie+ '</h1>')
}).listen(52273, ()=>{
    console.log('Server Running at http://127.0.0.1:52273');
})

// 처음 요청 할 때는 클라이언트가 쿠키를 가지고 있지 않으므로 undefined가 뜹니다.
// 재 요청시 클라이언트가 쿠키를 가지고 있으므로 breakfast=toast; dinner=chicken 설정한 쿠키가 보입니다.