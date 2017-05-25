# 마크업 개발 레벨 테스트

서핑중에 흥미로운 테스트가 있어 해보고, 가져왔음
나름 마크업을 할줄 안다고 생각했는데, 처참히 발렸다..

프론트를 주력으로 하고있다면 아래의 링크로 가서 한번쯤 테스트 해보면 좋을 것 같음

[마크업 테스트 출처](http://tobyyun.tumblr.com/post/115282929482/%EB%A7%88%ED%81%AC%EC%97%85-%EA%B0%9C%EB%B0%9C-%EB%A0%88%EB%B2%A8-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%A7%88%EB%AC%B8)
[답안 참조](https://milooy.wordpress.com/2015/04/03/web-%EB%A7%88%ED%81%AC%EC%97%85-%EB%A0%88%EB%B2%A8%ED%85%8C%EC%8A%A4%ED%8A%B8/)

위 : 작성한 답
아래 : 검색 결과 (없을 시 답이 맞은것)

## HTML
1. Doctype을 사용하지 않을 때는 무슨 일이 발생할까요?
> HTML5이전 버전으로 렌더링되어 레이아웃이 깨짐
> 
> 웹이 quirks mode로 작동해 구형 브라우저에서 동작하던 것과 같이 동작함

2. 웹표준에 맞게 작업할 때 b, i 태그 대신 적합한 태그는 각각 무엇일까요?
> `<strong>`, ?
>
> `<strong>`, `<em>`
> 
> `<b>`,`<i>`는 표준에 맞지 않는것을 알고 있어서 사용을  안좋아했는데 `<em>`을 처음 알고 표준에 맞다는 사실도 알았음

3. block 요소와 inline 요소에 해당하는 태그들을 각각 5개씩 적어보세요.
> div, p, a, h1, nav...   / span, strong, li...
>
> 블록 : div, p, h1~h6, ul, li...
> 인라인 : a, img, span, select, td...
> 
> 몇개 잘못알고있었다.

4. blockquote 태그는 어떤 용도로 사용해야 할까요?
> 인용구 사용시

5. 인라인 스타일(style=“property:value”)을 가급적 사용하지 말아야 할 이유는 무엇일까요?
> 유지보수가 힘들어짐
>
> 구조와 표현의 분리를 위함

6. myPhoto.jpg 파일을 img 태그로 작성해보세요.
> `<img src="myPhoto.jpg" alt="myPhoto">`

7. HTML에서 id 속성을 사용하는 이유와 주의 할 점은 무엇일까요?
> 태그에 고유 id를 붙여 스타일링할때, class보다 우선순위로 적용되는 부분을 주의해야함
>
> 페이지 당 한번만 써야함 / 알고있었지만 기억이 안났음

8. ‘TopArea'라는 클래스명이 좋지 않은 이름이라면 그 이유는 무엇일까요?
> script단과 맞춰주려면 kebab-case로 작성해야해야함
>
> Top이라는 방향성을 가지고 있어서, 접근성 차원에서도 방향은 의미가 없음

9. 'blue-box'라는 클래스명이 좋지 않은 이름이라면 그 이유는 무엇일까요?
> 음..클래스 이름이 의미하는것이 분명하지 않은 것 같다.
>
> 색상이 CSS에서 변경될 수 있음

10. HTML5에 새롭게 추가된 aside 태그는 어떤 용도로 사용해야 할까요?
> 이름그대로 사이드에있는 nav라고 이해하고 있음
>
> 컨텐츠의 주요 내용이 아니고 부수적인 내용일 때

11. input 태그와 항상 함께 사용해야 할 태그는 무엇일까요?
> `<button>`
>
> `<label>`
> 
> 꼭 필요한건지 몰랐는데 처음 알았다

12. 모바일 웹 또는 반응형웹디자인 프로젝트에서 각 기기에 적합한 화면을 보여주기 위해 필요한 meta 태그는 무엇일까요?
> device ~~ 속성을 썼는데 정확히는 모르겠다
>
> `<meta name="viewport" content="width=device-width">`
> 
> 보니까 알것같다

## CSS

1. 화면 상에는 보이지 않으나, 스크린 리더에서 읽혀야 하는 요소에 주어야 할 스타일링을 작성해보세요.
> img alt속성, html lang속성, 태그의 name속성 밖에 모르겠다
>
> IR기법이라 부르며 `display: none`과 `z-index`는 잘못된 방법임. `text-indent`와 `z-index`를 활용
>
> 처음봄. 자세히 알아봐야 할 필요가 있음

2. float 속성을 가진 자식을 품은 부모요소는 높이 값이 0이 되는 때가 있습니다. 이 현상을 해소하는법(clearing)을 알고 있나요?
> 부모요소:after에 `content: ''; display: table; clear: both` 적용

3. border-box와 content-box의 차이점은 무엇일까요?
> width, heigth 기준(box-sizing)을 border와 content로 지정

4. position: relative는 어떤 경우에 사용 하나요?
> 부모요소를 기준으로 요소를 배치하고 싶을 때
>
> 좌표를 재정의할 때

5. CSS Reset은 무엇이며 왜 사용할까요?
> 리셋하지 않으면 기본적으로 태그가 가진 속성이 스타일링에 포함되어 레이아웃이 뭉개질 수 있음
>
> 크로스 브라우징(브라우저마다 약간씩 차이가 있으므로)

6. Sass, less, Stylus와 같은 CSS 프리프로세서를 사용해본적이 있나요?
> Sass 공부중

7. id, class, inline style, !important를 우선순위 순으로 나열해보세요.
> !important, inline, id, class

8. CSS에서 상속이 되는 속성을 2개만 꼽아보세요.
> width, height? 잘모르겠다
>
> color, size가 상속

9. Sprite image 기법을 사용하는 이유는 무엇일까요?
> 처음 들어봤다
>
> 로딩 속도 감소, 서버로의 요청 횟수 최소화
> 이미지를 한개의 파일로 합쳐 `background-image`로 적용 후에 해당 이미지 위치에 레이아웃을 배치하는 방법, 자동화 툴도 존재함
>
> 이것역시 공부해야 함

10. Sprite image 기법을 사용하는데 필요한 CSS 속성들을 꼽아보세요.
> 역시 모른다
>
> `background-position`

11. 점진적 향상(Progressive Enhancement)의 뜻을 설명 할 수 있나요?
> 이것도 모른다..3연속 blank..
>
> [내용이 길어 다른 링크로 첨부](https://github.com/JungYouTaek/TIL/blob/master/etc/web-accessibility.md)
12. 웹폰트를 적용하기 위해서는 어떤 확장자의 폰트 파일들이 필요할까요?
> ttc, ttf
>
> ttf,eot,svg 왼쪽 두개만 있어도 대부분 지원된다고 한다

13. 개발사 접두어(vendor prefix)를 꼭 사용해야 할 CSS 속성(property)를 2개만 꼽아보세요.
> 잘 모르겠다
>
> 앞에 webkit(크롬,사파리), moz(파폭), o(오페라), ms(IE) 등이 붙는것

14. 반응형웹디자인의 3가지 요소를 꼽아보세요.
> grid, ...
>
> Media Query, Flexible Image, Fluid Grid

15. 모바일기기를 대응할 때 기준으로 삼는 해상도 사이즈는 몇이며 그 이유는 무엇인가요?
> 560px..? 잘 모르겠다
>
> 320px!

16. :first-child와 :last-child가 지원하는 IE의 버전명을 적어보세요.
> 모르겠다
>
> 7, 9(first-child로 예외처리를 많이 한다고 함)

17. 포토샵(또는 다른 그래픽툴)에서 이미지를 자를 때 어떤 기능을 사용하나요? (메뉴명, 단축키 등)
> ?
>
> cmd + t

18. jpg, gif, png의 차이점을 설명해보세요.
> png가 화질이 짱이다(주륵)
>
> jpg: 손실 압축, 용량을 줄임, 가장 널리 쓰임
> png: 비손실 압축, 투명 가능
> gif: 비손실 압축, 움직이는 이미지 제작 가능

19. 가상컨텐츠(:before, :after)는 어떤 용도로 사용할까요?
> clearfix시 사용하기도 하고, 버튼으로 토글시에 사용함
20. 블럭요소 안의 어떤 자식 요소를 정중앙에 놓는 방법을 알고 있습니까?
> 부모요소에 `position: absolute`, 자식요소에 `position: relative; top: 50%; left: 50%;` 맞나..
>
> 그냥 flexbox 쓰는게 짱인것 같다.

## 후기

모르는걸 많이 배운 것 같다. CSS는 진짜 알다가도 모르겠다
