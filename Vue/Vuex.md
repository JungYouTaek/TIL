# Vuex 정리

Vue를 사용하는데 있어 가장 많이 따라붙는 상태관리 라이브러리인 Vuex를 공부하면서 정리해보려함.

최대한 보면서 이해하기 쉬운쪽으로 작성했기 때문에 비약이 있을 수 있음

[참고 문서 출처](http://vuex.vuejs.org/kr/)

## Vuex란?

Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리

Flux, Redux 에서 영감을 받아 Vue에 최적화시킨 라이브러리

모든 컴포넌트에 대해 중앙 저장소 역할을 하며, 예측 가능한 방식으로 상태를 변경할 수 있음.


### "상태 관리 패턴"이란?

우선 단방향 데이터의 흐름을 살펴보면

Actions, State, View 순으로 데이터가 흐른다.

이때 공통의 상태(State)를 가진 여러 컴포넌트가 존재하면 성능이 저하되는 문제가 생긴다.

이러한 문제 때문에 우리는 컴포넌트에서 공유된 상태를 추출해 Vuex로 이를 전역 싱글톤으로 관리한다.

> 싱글톤 패턴이란?
> 생성하고자 하는 인스턴스의 수를 한개로 제한하는 것
> 인스턴스의 간섭, 자원 낭비를 막기위해 고안된 방법

Vuex는 단순한 사이트라면 필요가 없지만, 중규모 이상으로 가면 필요성을 느껴 자연스럽게 선택한다(고 하더라)


## Store(스토어)

Vuex의 핵심 **Store**

Store는 기본적으로 애플리케이션 상태를 보유하고 있는 컨테이너

예제 코드

```
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

만약 모듈 시스템을 사용한다면 아래 코드를 위의 코드 최상단에 덧붙여야 함

```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```

위에서 생성한 state 객체에 `store.state`로 접근해 `store.commit`으로 상태를 변경할 수 있음

```
store.commit('increment')
console.log(stote.state.count) // -> 1
```

위의 코드에서 `mutations`로 상태값을 변경함으로써 코드를 읽을 때 상태의 변화를 파악하기 쉬움, 또한 변화를 mutation 단위로 확인해 디버깅을 할 수 있음 


## State(상태)

예를들어 여러개의 컴포넌트 내에서 counter기능이 필요하다 했을 때 카운터 기능을 모든 컴포넌트에 각각 구현하는 방법보다 Store에 counter라는 이름으로 컴포넌트화 해서 저장해놓고 기능이 필요한 컴포넌트에서 호출하는 방법을 사용하면 성능향상 및 유지보수에 용이할 것이다.

위의 예시로 코드를 짜보면 아래와 같다.

```
//store의 Counter 컴포넌트
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
	  //this를 사용해 모든 컴포넌트에서 사용 가능하게 함
      return this.$store.state.count
    }
  }
}
```
```
//Counter기능을 필요로하는 컴포넌트
const app = new Vue({
  el: '#app',
  // "store" 옵션을 사용하여 저장소를 제공
  // 그러면 모든 하위 컴포넌트에 저장소 인스턴스 삽입 가능
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```

### `mapState` 헬퍼

컴포넌트가 여러가지의 연산, 속성등을 필요로 할 때 전부 `computed`로 선언하면 규모가 너무 커지므로, 이를 대비해 `mapState` 헬퍼를 사용해 키 입력을 줄일 수 있다.

```
// 독립 실행 형 빌드에서 헬퍼가 Vuex.mapState로 노출됩니다.
import { mapState } from 'vuex'

export default {
  // ...
  computed: mapState({
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    count: state => state.count,

    // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
    countAlias: 'count',

    // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합니다
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```
```
computed: mapState([
  // this.count를 store.state.count에 매핑 합니다.
  'count'
])
```

Vuex를 사용한다고 꼭 모든 상태를 Vuex에 넣어야 하는것은 아니니, 개인이 판단해 필요한 부분은 로컬상태로 남겨둘것!


## Getters

