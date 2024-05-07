function solution(arr) {
    let answer = 0;
    let answer2 = [];
    while (true){
        for (let i = 0; i < arr.length; i++){
            answer2.push(arr[i]);
            if (arr[i] >= 50 && arr[i] % 2 == 0){
                arr[i] = arr[i]/2;
            }else if(arr[i] < 50 && arr[i] % 2 == 1){
                arr[i] = arr[i]*2 + 1;
            }
        }
        if(JSON.stringify(arr) === JSON.stringify(answer2)){
            break;
        }
        answer2 = [];
        answer++;
    }
    return answer;
}
console.log(solution([1, 2, 3, 100, 99, 98]));

