

let express = require('express')

let app = express()

app.use((req, res) => {
    let output = [];
    for (let i = 0; i < 3; i++){
        output.push({
            count : i,
            name : 'name -' + 1;
        })
    }
    //응답합니다.
    //res.send() 메소드로 자바스크립트 객체를 입력했으므로 JSON 형식으로 출력합니다.
    res.send(output)
})

app.listen(8080, () => {
    console.log("Server Running at http://127.0.0.1:8080");
})

