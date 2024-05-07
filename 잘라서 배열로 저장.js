function solution(my_str, n) {
    let answer = [];
    let result = my_str.split('')

    let str = "";
    for (let i = 0; i < result.length; i++) {
        if (str.length == n) {
            answer.push(str);
            console.log(answer);
            str = result[i];
        }
        else{
            str += result[i]
            
        }   
    }
    if (str != "")
        answer.push(str)

    return answer;
}