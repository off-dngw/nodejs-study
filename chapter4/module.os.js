// 모듈을 가져옵니다.
let os = require('os');

console.log(os.hostname()); // 운영체제의 호스트 이름을 리턴합니다.
console.log(os.type()); // 운영체제의 이름을 리턴합니다.
console.log(os.platform()); // 운영체제의 플랫폼을 리턴합니다.
console.log(os.arch()); // 운영체제의 아키텍쳐를 리턴합니다.
console.log(os.release()); // 운영체제의 버전을 리턴합니다.
console.log(os.uptime()); // 운영체제가 실행된 시간을 리턴합니다.
console.log(os.loadavg()); // 로드 에버리지 정보를 담은 배열을 리턴합니다.
console.log(os.totalmem()); // 시스템의 총 메모리를 리턴합니다.
console.log(os.freemem()); //  시스템의 사용 가능한 메모리를 리턴합니다.
console.log(os.cpus()); // CPU의 정보를 담은 객체를 리턴합니다.
console.log(os.networkInterfaces()); // 네트워크 인터페이스의 정보를 담은 배열을 리턴합니다.