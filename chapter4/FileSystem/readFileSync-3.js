// 파일을 동기적으로 읽기!

let fs = require('fs')

let text = fs.readFileSync('textfile.txt', 'utf-8')

console.log(text)