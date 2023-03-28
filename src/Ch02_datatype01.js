
// 문자열 작성 방식과 타입
const stringA = '안녕하세요';
const stringB = "안녕하세요";
const stringC = `안녕하세요`;
const stringD = "";
const stringE = '';
console.log(typeof stringA);
console.log(typeof stringB);
console.log(typeof stringC);
console.log(typeof stringD);
console.log(typeof stringE);

// 줄 넘김 방식
const line = '안녕 하세요오오오 \n 안녕하세요오오오오오오';
console.log(line);

// 연산자
console.log('바나나' + '사과');
console.log('바나나' - '사과');
console.log('바나나' * '사과');
console.log('바나나' / '사과');
console.log('바나나' % '사과');

// 중첩 반복문
for(let i=0;i <= 9; i++) {
	for(let j=0; j <= 9; j++) {
			console.log(i, j);
	}
}

// 자바스크립트 배열
let arrays = ['가', '나', '다', '라', '마', '바', '사'];

console.log(arrays.push('아')) // 마지막 요소 추가
console.log(arrays.pop()) // 마지막 요소 제거
console.log(arrays.shift()) // 첫번째 요소 제거
console.log(arrays.unshift('첫')) // 첫번째 요소 추가
console.log(arrays.splice(1, 3)) // 중간 요소 제거
console.log(arrays.includes('다')) // 값 찾기 // Boolean 값을 리턴함
console.log(arrays.indexOf('다')) // 값 찾기 // 해당 값의 인덱스 번호를 리턴함 
console.log(arrays.lastIndexOf('마')) // 값 찾기 // 뒤에서 부터 해당 값의 인덱스 번호를 리턴함 
console.log(arrays.length) // 배열의 길이값을 리턴함

