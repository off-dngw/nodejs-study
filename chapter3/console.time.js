
// 시간 측정을 시작합니다.
console.time('alpha');

let output = 1;
  for (let i = 1; i <= 10; i++ ) {
    output += 1;
}
console.log('Result : ', output);

//시간 측정을 종료합니다.
console.timeEnd('alpha')