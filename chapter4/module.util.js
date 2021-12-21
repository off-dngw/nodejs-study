/*
*
*  util 모듈 : Node.js 보조적인 기능을 모아둔 모듈입니다.
*  util 모듈의 메소드
*   format : 매개변수로 입력한 문자열을 조합해 리턴합니다.
 */

let util = require('util');

// format 메소드를 사용해 문자열을 조합하고 출력합니다.
let data = util.format('% + %d = %d', 52 + 22 + 222);

console.log(data)

