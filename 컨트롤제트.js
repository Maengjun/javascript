function solution(s){
    let answer = 0;
    let result = s.split(' ')
    let num1 = 0;
    for (let i = 0; i < result.length; i++){
        if (result[i] == "Z")
            {answer -= num1}
        else
            {let num2 = parseInt(result[i])
            num1 = num2
            answer += num2}

    }
    return answer;
}


