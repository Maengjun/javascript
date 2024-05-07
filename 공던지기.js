//못품

function solution(numbers, k) {
    let index = 0; // 공을 던지는 사람의 인덱스

    // k번째 공을 던지는 사람의 인덱스를 계산
    for (let i = 0; i <= k; i++) {
        index = (index + i) % numbers.length; // 다음 사람으로 인덱스 이동
    }

    // 다음에 공을 던질 차례의 번호를 반환
    return numbers[index];
}