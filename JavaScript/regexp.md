# 자바스크립트 정규식

위는 특수문자의 종류와 기능, 아랫줄은 예시로 설명을 첨부

[자료 출처](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D)

## 정규식 생성 방법

1. let re = /ab+c/;

2. let re = new RegExp("ab+c");


## 정규식 패턴 작성 방법

1. 단순한 패턴 사용 ( ab라는 문자열을 찾기위해 /ab/ 사용 )

2. 특수 문자 사용 ( a*라는 문자열을 찾기위해 /a\*/ 사용 )

3. 플래그 적용 ( 대소문자 구분없이, 전체에서 검색, 등 아래에서 작성)


## 특수문자

단순한 패턴 대신 특수문자에 내장된 기능을 활용 가능

### \

특수문자를 문자열로 인식하도록 속성을 제거해줌

/a*/에서 *는 0이상을 의미하는데, /a\*/는 "a*"를 검색

"sada*er".match(/da*/) => "da"

"sada*er".match(/da\*/)=> "da*"

### ^

입력의 시작에 일치, 다중 선 플래그가 참으로 설정되어 있다면 줄 바꿈 다음에서도 일치

"an A".match(/^A/) => null

"An a".match(/^A/) => "A"

### $

입력의 끝에 일치, 다중 선 플래그가 참으로 설정되어 있다면 줄 바꿈 다음에서도 일치(^과 반대)

"eater".match(/t$/) => null

"eat".amtch(/t$/) => t

### *

0회 이상 연속으로 반복되는 앞선 문자에 일치. {0,}과 동일

"A boooed".match(/bo*/) => "booo"

"A bed".match(/bo*/) => "b"

### +

1회 이상 연속으로 반복되는 앞선 문자에 일치, {1,}과 동일

"A boooed".match(/bo+/) => "booo"

"A bed".match(/bo+/) => null

### ?

0 또는 1회 이상 연속으로 반복되는 앞선 문자에 일치, {0,1}과 동일

"A boooed".match(/bo?/) => "bo"

"A bed".match(/bo?/) => "b"

### .

다음 줄 문자를 제외한 어떤 하나의 문자에 일치

"hello, world".match(/.l/) => "el"

"hello, world".match(/..l/) => "hel"

### (x)

x에 일치하는 것을 기억함. 괄호를 capturing parentheses라 부름

x에 해당하는 것을 순서대로 $1, $2, $n...에 자리를 매겨 위치를 바꿀 수 있음

'bar ge foo'.replace( /(...) (..) (...)/, '$2 $3 $1' ) => "ge foo bar"

### (?:x)