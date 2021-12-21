/*
*
*   crypto 모듈 : hash 생성과 암호화를 수행하는 모듈입니다.
 */


let crypto = require('crypto');

let shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
let output = shasum.digest('hex');

// 실행결과
// crypto_hash :  820f329baab52f75e1e3844b61b7bfcaa4035d881c6f1fbd42dc29b024638c05
console.log('crypto_hash : ', output);
