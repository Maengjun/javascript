// 배열만들기6

function solution(arr){
    stk = []
    for (i=0; i<arr.length; i++){
        if (stk.length == 0){
            stk.push(arr[i])
            i + 1
        }
        else if (stk[stk.length-1] == arr[i]){
            stk.pop[stk.length-1]
            i + 1
        }
        else if(stk[stk.length-1] != arr[i]){
            stk.push(arr[i])
        }
    } 
    return stk.length > 0 ? stk : [-1]
}