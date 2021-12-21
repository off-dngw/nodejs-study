/*
 *   express 모듈 : http 모듈처럼 사용할 수 있지만 더 많은 기능이 있는 외부 모듈 입니다.
 *   middleware : express 모듈 use() 메소드의 매개변수에 입력하는 함수를 말합니다.
 *   router middleware : 페이지 라우팅을 지원하는 middleware 입니다.
 *   morgan middleware : 웹 요청이 들어왔을 때 로그를 출력합니다.
 *   cookie parser : 요청 쿠키를 추출합니다.
 *   body parser : POST 요청 데이터를 추출합니다. 최근엔 사용 X
 *   connect-multiparty : multipart/form-data 인코딩 방식을 사용해 POST 요청 데이터를 추출합니다.
 *   express-session : 세션을 쉽게 생성할 수 있게 도와줍니다.
 *
 */

// 실행 방법1

let express = require("express");
// 서버를 생성합니다.
let app = express();

//request 이벤트 리스너를 설정합니다
app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1> Hello Express </h1>`);
});

// 서버를 실행 합니다.
app.listen(8080, () => {
  console.log("Server Running at http://127.0.0.1:8080");
});

// 다른 실행 방법2
// let http = require('http')
// let express = require('express')
// let app = express();
//
// http.createServer(app).listen(8080, () =>{
//     console.log("Server Running at http://127.0.0.1:8080");
// })
