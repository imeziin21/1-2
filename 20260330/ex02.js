const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('숫자 입력 = ', (data) => {
    let num = 1;
    for(;num <= 9; num++) {
    console.log(`${data} * ${num} = ${data*num}`);
    }
    rl.close();
})

//readline은 사용자로부터 입력을 받기 위한 기능
//require('readline') → readline 모듈 불러오기
//createInterface() → 입력/출력 인터페이스 생성
//rl.question() → 질문하고 입력 받기
//rl.close() → 입력 종료

//함수 선언 옛날 방법
//function aa() {}
// 함수선언 es2015 새로나온 방법
// const aa = () => {}