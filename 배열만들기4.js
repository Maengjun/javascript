function solution(arr) {
    const stk = []
    for (let i = 0; i < arr.length; i++){
        if (stk.length < 1){
            stk.push(arr[i]);
            i += 1;           
        }else if (stk[stk.length - 1] < arr[i]){
            stk.push(arr[i]);
            i += 1;
        }else{
            stk.pop();
        }
    }return stk.length > 0 ? stk:[-1];
}

// console.log(solution([1, 4, 2, 5, 3]));



