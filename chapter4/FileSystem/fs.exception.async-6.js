// 비동기적으로 처리하는 예외 처리

let fs = require('fs')

// 파일을 읽습니다.

fs.readFile('textfile.txt', 'utf-8' ,(err, data)=> {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// 파일을 씁니다.

fs.writeFile('textfile.txt', 'Hello !!!', 'utf-8', (err, data) =>{
    if(err){
        console.log(err)
    }else{
        console.log('File Write Complete')
    }
})