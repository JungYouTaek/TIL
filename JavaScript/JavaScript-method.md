## Array(배열)

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


### splice(인자,인자,...)



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
