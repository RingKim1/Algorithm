function solution(n) {
    var answer = 0;
    let temp = String(n);
    let tempArray = temp.split("");
    for(let key of tempArray) {
        answer += Number(key);
    }
    return answer;
}