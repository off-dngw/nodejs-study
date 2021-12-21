/*
*   url 모듈
*   parse(urlString , [parseQueryString = flase or true]) : URL 문자열을 URL 객체로 변환해 리턴합니다.
 *  format(urlObj) : URL rorcpfmf URL 문자열로 변환해 리턴합니다.
 *  resolve(from , to ) : 매개변수를 조합해 완전한 URL 문자열을 생성해 리턴합니다.
 */


let url = require('url');

let parsedUrl1 = url.parse('https://off-dngw.github.io/');
console.log(parsedUrl1);

//쿼리스트링 까지 parse
let parsedUrl2 = url.parse('https://off-dngw.github.io/', true);
console.log(parsedUrl2.query);