## Array(배열)


### sort()

배열 안의 원소를 정렬해 반환(알파벳,한글,숫자 모두가능)

[2,3,1].sort() => [1,2,3]


### reverse()

배열의 원소 순서를 반대로 정렬해 반환

[1,2,3].reverse() => [3,2,1]


### concat(인자,인자,...)

기존 배열에 인자의 내용을 추가해 반환

[1,2].concat(3) => [1,2,3]

[1,2].concat([3,[4]]) => [1,2,3[4]]


### slice(시작,끝)

시작 인자부터 끝 인자 전까지 배열을 반환, 문자열의 substring과 비슷함

인자를 1개 입력시 입력값의 인덱스부터 끝까지 반환

음수 입력시 뒤에서부터 반환

[1,2,3,4].slice(1,2) => [2]

[1,2,3,4].slice(2) => [3,4]

[1,2,3,4].slice(-3,-2) => [2]


### splice(시작,끝,삽입,삽입,...)

배열의 원소를 삽입, 제거할 때 사용

인자는 순서대로 삭제시작인덱스, 삭제할개수, 삽입할원소, 삽입할원소,...

아래 예제는 실행시마다 변수 a 다시 선언 후 실행한 결과

let a = [1,2,3,4,5]

a.splice(2) => [3,4,5] , a => [1,2]

a.splice(2,1) => [3] , a => [1,2,4,5]

a.splice(2,1,'a','b') => [3] , a => [1,2,"a","b",4,5]


### push(인자,인자,...)

인자의 내용을 배열의 뒤에 추가하고 배열의 길이를 반환

let a = [1,2,3]

a.unshift(4,5) => 5, a => [4,5,1,2,3]


### pop()

배열의 마지막 원소를 삭제 후 반환

let a = [1,2,3]

a.pop() => 3 , a => [1,2]


### unshift(인자,인자,...)

인자의 내용을 배열의 앞에 추가하고 배열의 길이를 반환

let a = [1,2,3]

a.unshift(4,5) => 5, a => [1,2,3,4,5]


### shift(인자,인자,...)

인자의 내용을 배열의 앞에 추가하고 배열의 길이를 반환

var a = [1,2,3]

a.shift() => 1, a => [2,3]


### toString()

배열의 모든 원소를 쉼표로 구분해 문자열로 반환

[1,2,"a","b"].toString() => "1,2,a,b"


## ECMA2015(ES6) 배열 메서드


### forEach(함수(인자))

배열을 순회하는 메서드

let sum = 0;

[1,2,3,4].forEach((x) => (sum += x)) => 10


### map(함수(인자))

배열의 각 원소를 함수의 인자로 전달하고 해당 함수로 연산 후 새로운 배열로 반환

[1,2,3,4].map((x) => { return x*x }) => [1,4,9,16]


### filter(함수(인자))

배열의 각 원소를 함수의 인자로 전달하고 해당 함수의 조건식을 만족하는 원소만 새로운 배열로 반환

[1,2,3,4].filter((x) => { return x<4 }) => [1,2,3]


### every(함수(조건문)))

배열의 각 원소에 대해 조건식을 모두 만족하면 true를 반환, 빈 배열일 경우 true 반환

[1,2,3].every((x) => { return x<4 }) => true


### some(함수(조건문)))

배열의 일부 원소에 대해 조건식을 만족하면 true를 변환, 반환값이 true로 결정되면 중단, 빈 배열일 경우 항상 false 반환

[1,2,3].some((x) => { return x<2 }) => true

### reduce(함수(인자,인자)), reduceRight()

배열의 각 원소를 순차적으로 두개씩 비교해 함수에 의해 연산, reduce()는 오름차순(왼쪽>오른쪽), reduceRight()는 내림차순(오른쪽>왼쪽)으로 진행

[1,2,3,4,5].reduce((x,y) => { return x-y }) => 1-2-3-4-5 = -13

[1,2,3,4,5].reduceRight((x,y) => { return x-y }) => 5-4-3-2-1 = -5

### indexOf(인자), lastIndexOf(인자)

배열의 원소중 특정 값을 찾음, indexOf는 오름차순(왼쪽>오른쪽), lastIndexOf는 내림차순(오른쪽>왼쪽) 순으로 검색하며 가장 먼저 찾은 값의 인덱스를 반환, 값이 없으면 -1 반환

[2,4,6,4,8].indexOf(4) => 1

[2,4,6,4,8].lastIndexOf(4) => 3

### isArray(인자)

해당 인자가 배열인지 확인

let a = [1,2,3]

Array.isArray(a) => true


## String(문자열)


### charAt(인자)

지정한 인덱스의 문자값을 반환

"hello".charAt(str.length ### 1) => "o"


### indexOf(인자)

인자의 내용을 탐색해 index 반환

"hello".indexOf("h") => 4


### match(인자)

인자의 내용을 탐색해 반환, 여러개 있으면 배열로 반환

보통 인자는 정규식으로 작성 /정규식/플래그 형태로 쓴다

"hello".match(/l/g) => ["l","l"]


### replace(인자,인자)

앞의 인자에 문자열에서 찾을 내용을 적고, 뒤의 인자에 변경할 내용을 적는다

"hello".replace("ello","i") => "hi"


### split(인자) <=> join(인자)

split: 인자의 내용을 기준으로 문자열을 잘라 배열로 반환

join: 인자의 내용을 기준으로 배열을 문자열로 합침(미입력시 ,로 연결)

"hello world".split(" ") => ["hello","world"]

["hello","world"].join(" ") => "hello world"

### substring(시작,끝)

문자열에서 시작과 끝 인덱스로 문자열 반환

"hello".substring(1,2) => "e"


### substr(시작,길이)

문자열에서 시작 인덱스와 길이로 문자열 반환

"hello".substr(1,2) => "el"


[출처](http://kssong.tistory.com/26)
