function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++){
        let divi = 0;
        for (let j = 1; j <= i; j++){
            if (i % j === 0){
                divi++
            }
        }

        if (divi % 2 === 0){
            answer += i
        } else {
            answer -= i
        }
    }

    return answer;
}

console.log(solution(13, 17))