function solution(numbers){
    const numberMap = {
        "zero" : 0, "one" : 1, "two" : 2, "three" : 3, "four" : 4,
        "five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9
    }
    let result = ""
    let word = ""
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === ''){
            result += numberMap[word] + ""
            word = ""
        } else {
            word += numbers[i]
        }
    }
    result += numberMap[word]
    return parseInt(result)
}