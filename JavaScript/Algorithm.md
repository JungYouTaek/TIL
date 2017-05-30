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
