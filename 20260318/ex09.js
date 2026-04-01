const a = true;
const b = false;

console.log(a&&b); // a와 b가 둘다 참인지(and)
console.log(a||b); // a와 b 둘중에 하나라도 참인지(or)
console.log(!a); // a의 반대(not)

let c = 10;
const d = true && 10+2; // 앞에있는게 true면 뒤에있는거랑 같은코드고 false면 결과값이 false로 나옴
console.log(d);