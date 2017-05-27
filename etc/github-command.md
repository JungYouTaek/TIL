# Github 간편 사용 설명서

## 목차

1. 새로운 repository 생성
2. 1번 이후 변경 사항이 있을 때
3. branch, merge 사용법
4. 충돌 시 해결 방법
5. 풀리퀘스트 보내기

## 1. 새로운 repository 생성

Github 페이지에서 새로운 repository 생성 후에 로컬에서 작업한 내용을 올리기 위한 명령어 순서

### 명령어 입력 순서

1. git init
2. git add .
3. git commit -m "commit message"
4. git remote add origin repostory주소
5. git push -u origin master

1번으로 현재 작업중인 폴더에서 git을 사용할 수 있도록 해주고

2번으로 폴더 내의 모든 파일(.이 모든 파일을 의미)을 git의 staging area에 추가

3번으로 커밋과 동시에 `-m`으로 커밋 메세지 작성

4번으로 원격 저장소, 즉 github repository 주소를 origin 이라는 이름으로 등록

5번으로 origin이라는 원격 저장소에 master 브랜치에 푸시, 이때 `-u`를 쓴다면 다음번 부터 git push만 입력해도 origin의 master로 푸시가 된다.


## 2. 1번 이후에 새로운 변경 사항이 있을 때

1번 과정 이후에 변경 사항이 있어 push를 하고 싶을 때 순서

### 명령어 입력 순서

1. git add .
2. git commit -m "commit message"
3. git push

과정은 1번과 같으나 init과 원격 저장소 등록을 할 필요가 없다


## 3. branch, merge 사용법

협업을 할 때 많이 쓰는 기능 branch, merge 이름 그대로 가지를 치고, 합치는 방법이다

### 명령어 입력 순서

1. git branch 브랜치이름설정
2. git checkout 브랜치이름
3. git add .
4. git commit -m "commit message"
5. git push origin 브랜치이름

1번으로 새로운 브랜치를 생성(기존 브랜치는 master)

2번으로 생성한 브랜치로 이동

3번으로 모든 파일 추가

4번으로 커밋, 메세지 작성

5번으로 origin 저장소의 새로운 브랜치에 푸시

브랜치에 푸시까지 완료 한 뒤

1. git checkout master
2. git merge 브랜치이름

위의 과정으로 master에 새로운 브랜치를 merge할 수 있다


## 4. 충돌 시 해결 방법

pull이나 push를 했을 때 원격저장소의 내용과 로컬폴더내의 내용중 같은 라인에 다른 내용이 있다면 충돌 발생

터미널 로그에 충돌이 난 파일이 표시되니 직접 수정 후 다시 pull이나 push를 실행

가장 좋은 방법은 협업자들끼리 역할을 완전히 분담해 애초에 같은 코드를 건드리지 않는 것이지만, 어쩔 수 없이 그렇게 된다면 항상 작업 전에 pull을 습관화하면 충돌을 최소한으로 줄일 수 있을 것!

## 5. 풀 리퀘스트 보내기

오픈소스를 만들 때 가장 많이 쓰는 방법

내가 push한 내용을 repository의 마스터 권한을 가진 사람에게 pull 해달라고 요청하는것

우선 참여하고 싶은 repository에 들어가 오른쪽 상단의 fork로 나의 repository에 복사해옴

### 명령어 입력 순서

1. git clone 원본repository주소
2. git remote add 나의repo이름설정 나의repo주소
3. git remote -v
4. git pull origin
5. git checkout -b 브랜치이름(이슈)설정 origin/master
6. git push 나의repo이름 브랜치이름

1번으로 원본 repo의 코드들을 나의 로컬환경에 클론해온다.

2번으로 포크해온 나의 repo주소를 새로운 이름으로 추가해준다.

3번으로 현재 등록되어있는 원격저장소가 어떤게 있나 확인해본다. 아마 origin이라는 이름의 원본 repo주소와 새로 설정한 이름의 나의repo주소가 있을 것이다

4번으로 혹시 모를 코드변화가 있을 수 있으니 한번 pull해서 확인해준다

5번으로 원본repo에 이슈명이나 키워드로 브랜치를 생성하고 이동한다

모든 작업 후에 6번으로 나의 repo에 푸시한다

위의 과정 이후에 github에서 fork한 나의 repo에서 방금 푸시한 브랜치명을 선택 하면 옆에 Pull request 버튼이 생기고, 절차에 따라 누르면 풀리퀘스트가 진행된다.

여기서도 충돌이 발생할 수 있으니, 코드를 보며 적절히 수정해주면 된다.

## 마치며

멋사 강의 준비하면서 공부했는데 기초적인 방법은 익힌 것 같아 도움이 많이 되었다!
