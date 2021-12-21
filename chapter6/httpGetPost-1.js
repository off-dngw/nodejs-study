
let http = require('http')

http.createServer((req, res) => {
    if(req.method === 'GET'){
        console.log('GET 요청 입니다.')
    }else if (req.method === 'POST'){
        console.log('POST 요청입니다.')
    }
})
.listen(8080, () => {
  console.log('Server Running at http://127.0.0.1:8080')
})
