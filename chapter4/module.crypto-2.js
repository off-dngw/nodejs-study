// 모듈을 가져옵니다.
let crypto = require('crypto');

// 변수를 선언합니다.
let key = '아무도 알지 못하는 나만의 비밀 키';
let input = 'PASSWORD';


// 암호화
let cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
let cipheredOutput = cipher.final('base64');

// 암호화 해제
let decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
let decipheredOutput = decipher.final('utf8');

console.log('원래 문자열 : ' + input);
console.log('암호화 : ' + cipheredOutput);
console.log('복호화 : ' + decipheredOutput);

/*
원래 문자열 : PASSWORD
암호화 : JVFgMKBOz21IcJY7es33qQ==
복호화 : PASSWORD
(node:9076) [DEP0106] DeprecationWarning: crypto.createCipher is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
 */