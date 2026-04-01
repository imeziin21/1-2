const a = 10;
const b = 20;
if (a<b) { // 이 조건문에선 10이 20보다 작으므로 true
    console.log('a는 b보다 작습니다.');
}
else {
    console.log('a는 b보다 큽니다.');
}

console.log(a<b?'a는작다':'a는크다'); // console.log(조건문 ? ture일때 출력값 : false일때 출력값)도 가능(3항연산자)