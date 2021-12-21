/*
*   process 객체의 속성
*
*   argv : 실행 매개변수를 나타냅니다.
*   env : 컴퓨터 환경과 관련된 정보를 나타냅니다.
*   version : Node.js 버전을 나타냅니다.
*   versions  : Nods.js와 종속된 프로그램 버전을 나타냅니다.
*   arch : 프로세서의 아키텍처를 나타냅니다.
*   platform : 플랫폼을 나타냅니다.
*
*   process 객체의 메소드
*
*   exit([exitCode = 0]) : 프로그램을 종료 시킵니다.
*   memoryUsage() : 메모르 사용 정보 객체를 리턴합니다.
*   uptime() : 현재 프로그램이 실행된 시간을 리턴합니다.
 */

// process.argv
process.argv.forEach((item, index) => {
    // 출력 합니다.
        console.log(index + ':' + typeof (item) + ':' , item)

    //실행 매개변수에 --exit가 있을 때
        if(item === '--exit'){
            //다음 실행 매개변수를 얻습니다.
            let exitTime = Number(process.argv[index + 1])
            // 일정 시간 후 프로그램을 종료합니다.
            setTimeout(() =>{
                process.exit()
            },exitTime)
        }
})

// node process.js --exit 3000;
// 콘솔 객체가 실행 되고 3초 후 종료됩니다.