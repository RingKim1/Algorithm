function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(let key of arr) {
        sum += key;
    }
    answer = sum/arr.length
    
    return answer;
}