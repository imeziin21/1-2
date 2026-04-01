const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력하세요\n',function(ans){
    console.log(ans);
    if(ans % 2 == 0) {
        console.log('ans는 짝수입니다.');
    } else {
        console.log('ans는 홀수입니다.');
    }
    rl.close();
});
// control + c = 프로그램 강제종료