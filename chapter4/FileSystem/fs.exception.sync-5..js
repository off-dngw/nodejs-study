// 동기 처리를 하는 메소드의 예외처리

let fs = require('fs');

// 파일을 읽습니다.
    try {
        let data = fs.readFileSync('textfile.txt', 'utf-8')
        console.log(data)
    }catch (e) {
        console.log(e)
    }

// 파일을 씁니다.

    try {
        fs.writeFileSync('textfile', 'Hello Hello', "utf-8")
        console.log('File Write Complete')
    }catch (e) {
        console.log(e)
    }

    