let fs = require('fs');
let http = require('http');

http.createServer(function(req, resp) {
    fs.readFile('sample.jpg', function(error, data){
        // 이미지 파일을 읽습니다.
        resp.writeHead(200, {'Content-Type' : 'image/jpeg'});
        resp.end(data);
    });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});

http.createServer(function(req, resp) {
        // 음악 파일을 읽습니다.
    fs.readFile('sample-mp3.mp3', function(error, data){
        resp.writeHead(200, {'Content-Type' : 'audio/mp3'});
        resp.end(data);
    })
}).listen(52274, function(){
    console.log('Server Running at http://127.0.0.1:52274');
});