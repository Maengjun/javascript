function solution(ineq, eq, n, m) {
    // 주어진 조건에 따라 두 수의 크기를 비교하여 결과를 반환
    if (ineq === "<") {
        if (eq === "=") {
            if (n <= m || n === m) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (n < m) {
                return 1;
            } else {
                return 0;
            }
        }
    } else {
        if (eq === "!") {
            if (n !== m) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (n > m || n === m) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

// 예시 입력과 주어진 조건에 따라 함수를 테스트
console.log(solution("<", "=", 20, 50));  // 예상 출력: 1
console.log(solution(">", "!", 41, 78));  // 예상 출력: 0

