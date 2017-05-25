## Array(배열)


## String(문자열)

- charAt(인자)
지정한 인덱스의 문자값을 반환
ex) "hello".charAt(str.length - 1) => "o"

- indexOf(인자)
인자의 내용을 탐색해 index 반환
ex) "hello".indexOf("h") => 4

- match(인자)
인자의 내용을 탐색해 반환, 여러개 있으면 배열로 반환
보통 인자는 정규식으로 작성 /정규식/플래그 형태로 쓴다
ex) "hello".match(/l/g) => ["l", "l"]

-replace(인자, 인자)
앞의 인자에 문자열에서 찾을 내용을 적고, 뒤의 인자에 변경할 내용을 적는다
ex) "hello".replace("ello", "i") => "hi"

- split(인자)
인자의 내용을 기준으로 문자열을 잘라 배열로 반환
ex) "hello world".split(" ") => ["hello", "world"]

- substring(시작, 끝)
문자열에서 시작과 끝 인덱스로 문자열 반환
ex) "hello".substring(1,2) => "e"

- substr(시작, 길이)
문자열에서 시작 인덱스와 길이로 문자열 반환
ex)"hello".substr(1,2) => "el"
