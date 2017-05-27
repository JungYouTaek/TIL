# Ruby on Rails에 템플릿 넣기

멋사 하프톤을 하면서 전반적으로 템플릿 삽입에 어려움을 느껴 포스팅 해야겠다 생각함
[코드 github 주소](https://github.com/INHA-LIKELION/template)

[파일 minify하기](http://www.minifier.org/)

[블로그](http://takeuu.tistory.com/104)에서 보시는게 정신건강에 이득!

## 목표

레일즈는 MVC패턴의 고유한 프로젝트 구조를 가지고 있어 템플릿을 넣을 때 까다로운 부분이 있어 가이드라인을 제시하려 함.

레일즈 빈 프로젝트에 부트스트랩 기반 SPA 템플릿인 [GraySclae](https://startbootstrap.com/template-overviews/grayscale/)을 넣어보는 것을 해볼 것!


## 준비

큰 상관은 없겠지만, Ruby는 2.4.0, Rails는 5.0.3 버전, 루비마인으로 진행

보통 템플릿은 라이브러리 사용시 cdn 대신 vendor 폴더에 다운받아서 경로를 참조하는 식으로 하기 때문에 그대로 적용할 예정


## 과정

1. 레일즈 프로젝트 생성 및 세팅
routes에 `index.html`을 root로 설정
protect 해제

2. 컨트롤러, 뷰 생성
`rails g controller home index`로 home컨트롤러에 index페이지를 만들었고, 여기에 템플릿을 적용할 예정

3. 템플릿의 head부분 옮기기
템플릿의 head부분을 그대로 복사해 `layout > application.html`에 붙인다.
레일즈는 **에셋 파이프라인**을 이용하기 때문에 우선은 각종 라이브러리(여기서는 bootstrap, font-awesome) 링크를 지우고, `stylesheet,javascript link_tag`의 `data-turbolinks-track`을 지우고 자바스크립트를 불러오는 `<%= javascript_include_tag 'application' %>`는 body태그의 끝으로 보내준다. 끝으로 필요없는 코드를 지우고 정리하면 다음과 같다.

4. 템플릿의 body부분 옮기기
템플릿의 body부분을 그대로 복사해 `index.html`에 붙이는데 이때 보면 가장 하단에 script부분이 있는데 이는 모두 지워 `application.html`의 `<%= yield %>`의 밑으로 보내준다. 여기서도 마찬가지로 각종 라이브러리 스크립트 태그는 지워준다.
body태그를 보면 id가 부여되어있는데 이는 페이지 스크롤링에 사용되는 것이다. 지금 만드는 페이지는 싱글페이지이기 때문에 `application.html`의 body에 id를 적어주면 정상 작동한다.

5. CSS, JavaScript, img 옮기기
CSS는 less,sass로도 주어지는데 본인이 쓸줄 안다면 가져와도 되지만, 가장 일반적으로 퓨어 CSS를 쓰기 때문에 `grayscale.css`을 `assets/stylesheets`로 가져온다. 이때 이 파일을 수정해야 하기 때문에 min파일과 같이 가져오게 된다면, 수정 후에 둘의 내용이 달라 제대로 효과가 적용되지 않을 수 있다.(중요함!!)
마찬가지로 `grayscale.js`도 `assets/javascripts`에, 이미지파일 3개도 `assets/images`에 넣어준다.

6. vendor 옮기기
vendor란? 누군가 만들어 놓은, 예를들면 부트스트랩, 제이쿼리같은 라이브러리파일을 담는곳이고, 위에서 CSS,JS,img를 넣은 assets폴더는 커스텀파일을 담는곳이다.
vendor폴더에 우리가 필요한(head에서 삭제한) 파일들을 가져온다. 이는 우리가 수정할 필요가 없기 때문에 min파일을 가져오든 둘다가져오든 상관없다.(min이란 minify의 약자로 파일의 공백을 제거해 압축하는것)
`vendor > assets > javascripts`에 `bootstrap.min.js`, `jquery.min.js`를 넣고, `vendor > assets > stylesheets`에 `bootstrap.min.css`를 넣는다. `font-awesome`은 폰트까지 가져와야해서 그냥 cdn을 썼음(ㅎ)

7. asset pipeline 설정
커스텀파일을 넣은 `assets`폴더는 `application.js`와 `application.css`의 `require_tree`,`require_self`라고 입력되어 있는 코드를 통해 알아서 불러올 수 있지만, `vendor`폴더는 따로 적어줘야 한다.
`vendor`에 들어간 라이브러리 파일명을 각각 js와 css에 맞게 적어준다.
이때 제이쿼리가 먼저 호출되어야 부트스트랩이 작동하기 때문에 순서에 유의해야 한다.

8. img url 설정
`grayscale.css`에서 `cmd + f`로 url이라는 단어를 검색해보면 백그라운드 이미지 url이 절대경로로 되어있다. 이때 파일명만 남겨두고 나머지를 지워주면, 레일즈는 알아서 `assets/images`에서 파일명을 검색해 불러오게 된다.



