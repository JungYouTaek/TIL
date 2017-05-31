1. 2진수 연속된 0의 최대 갯수
```
function solution(N) {
    let T = 2*N, check = false, count = 0,max = 0;
   for (T > 0; T = parseInt(T/2);) {
       if (T % 2 == 1) {
           check = true;
           count = 0;
       } else {
           if (check) {
               count += 1
               if (max < count) {
                   max = count
               }
           }
       }
   }
   return max
}
```

2-1. 홀수찾기
```
function solution(A) {
var qtts = {};
for (var iA in A) {
var element = A[iA];
if (!qtts[element]) {
qtts[element] = 1;
} else {
delete qtts[element];
}
}
return parseInt(Object.keys(qtts)[0]);
}
```

2-2. K번만큼 뒤에서 잘라 앞에 붙이기
```
function solution(A, K) {
    for (let i = 0; i < K; i++) {
        let last = A.splice(A.length-1)
        A = last.concat(A)
    }
    return A
}
```

4-1 다리완성 최소
```
function solution(X, A) {
    let B = [], result = -1;
    for(let i = 0; i < A.length; i++) {
        if ((A[i] <= X) && (B.indexOf(A[i]) == -1)) {
            B.push(A[i])
            if ( B.length == X ) { result = i; }
        }
    }
    return result
}
```

5-1 두수 사이에 약수 구하기
```
function solution(A, B, K) {
    return Math.floor(B/K) - Math.ceil(A/K) + 1
}
```
