function solution(n) {
    let answer = [];
    let divs = 2
    while (n >= 2){
        if (n % divs === 0){
            answer.push(divs)
            n = n/divs
        }
        else divs ++
    }
    return [...new Set(answer)];
}