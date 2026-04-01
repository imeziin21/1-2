var score = [];
score.push(10);
score.push(20);
console.log(score);

// var -> let,const로 바뀜
// number, string, boolean, null, undefind, object
// let = 값의 변경이 가능한 경우에 사용 , const = 값의 변경이 불가능한 경우에 사용

// 선언 초기화...
var a = 10;
var a = 20; //두번 선언이 가능하다.
console.log(a);

// 중복하게 문제가 됨. var score = 100;

let b = 10;
b = 20;
console.log(b); // 중복 할 수 없음.

const c = 30;
//c = 40; 값의 변경이 불가능하므로 실행오류가 뜸
console.log(c);