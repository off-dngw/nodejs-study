// 파일을 비동기적으로 읽기
let fs = require('fs')

fs.readFile('textfile.txt', 'utf-8', (err, data)=>{
    console.log(data)
})