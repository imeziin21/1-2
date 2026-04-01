// 원시형 자료형타입은 변경이 불가능한데 오브젝트형 자료형 타입은 변경이 가능함 => const
// const 자료형을 가장 많이 씀 let보다
// 오브젝트형 자료형 타입 -> 변수와 함수를 가지고있었음....

const person = {
    name: '길동', hi: function () {
        console.log('hihi');
    }
}
person.name = '영수';
console.log(person.name);
// console.log(person.hi);
person.hi();