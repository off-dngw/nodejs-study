

let fs = require('fs');

let data = 'Hello World';

// 파일을 비동기적으로 씁니다.
fs.writeFile('textWriteFile.txt', data, 'utf-8', (err, data )=> {
    console.log('Write File Async Complete')
})

// 파일을 동기적으로 씁니다.
fs.writeFileSync('textWriteFileSync.txt' , data , 'utf-8');
    console.log('Write File Sync Complete')