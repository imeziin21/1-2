const test1 = 'test';
const test2 = undefined;

// ?? = null이거나 undefined를 테스트합니다.
const result1 = test1 ?? null;   // ?? = 앞의 값이 null이 아닐경우 ??의 앞의 값을 그대로출력
const result2 = test2 ?? '뒤에꺼'; // ?? = 앞의 값이 null이거나 undeifned일 경우 ??뒤의 값을 출력

console.log(result1);
console.log(result2);
