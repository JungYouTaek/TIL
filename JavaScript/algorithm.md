
A.sort((a,b) => { return a-b})
배열의 원소갯수는 빈배열x .length로 판별
스택 push pop
큐 push unshift
문자열 포함은 정규식으로! .match(/1/g).length로 개수
true false로 전체에대해 체크

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
