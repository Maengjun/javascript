function solution(my_string) {
    // 수식을 공백을 기준으로 숫자와 연산자로 분리
    const tokens = my_string.split(' ');
    
    // 첫 번째 숫자를 결과값으로 초기화
    let result = parseInt(tokens[0]);
    
    // 연산자와 다음 숫자를 차례로 계산하여 결과값 업데이트
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const num = parseInt(tokens[i + 1]);
        
        if (operator === '+') {
            result += num;
        } else if (operator === '-') {
            result -= num;
        }
    }
    
    return result;
}