
A.sort((a,b) => { return a-b})
배열의 원소갯수는 빈배열x .length로 판별
스택 push pop
큐 push unshift
문자열 포함은 정규식으로! .match(/1/g).length로 개수
true false로 전체에대해 체크
charAt() 해당 인덱스로 내용반환
for in for of 사용
Math.min max 사용

피보나치
function jumpCase(num) {
	var answer = 0;
  var fibo1 = 1, fibo2 = 1;

  for (var i=1; i<num; i++) {
    answer = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = answer;
  }

	return answer;
}
소수
let A = [];
for ( let i = 2; i < 10; i++ ) {
  let check = false;
  for ( let j = 2; j < i; j++ ) {
    if ( i % j != 0 ) {
      check = true;
    } else {
      check = false;
      break;
    }
  }
  if (i == 2) { A.push(i) }
  else if (check) { A.push(i) }
}

그냥 안궁금할수도 있겠지만
0. 문제를 대충 읽는다.
1. 걍 각 엘리먼트를 인덱스로 갯수 세면 되겠네
2. 인풋크기를 본다. 1,000,000,000이네.  배열 못만들겠다
3. C++였으면 벡터 pair이나 set, map을 사용하고 JS의 경우 hash를 쓰자
4. 코딩

최대공약수
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
