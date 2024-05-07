function solution(s) {
    let answer = '';
    let word = s.split('')      
    if (word.length % 2 == 1){
        answer = word[Math.floor(word.length/2)]
    }
    else{
        answer = word[word.length/2 - 1] + word[word.length/2]
    } 
    return answer;       
}
    