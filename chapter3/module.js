
// 절대값을 구하는 메소드 입니다.
// abs() 모듈 생성
exports.abs = function (number) {
    if(0 < number){
        return number
    }else{
        return -number
    }

}

// 원의 넓이를 구하는 메소드 입니다.
// circleArea()모듈 생성
exports.circleArea = function (radius) {
    return radius * radius * Math.PI
}

