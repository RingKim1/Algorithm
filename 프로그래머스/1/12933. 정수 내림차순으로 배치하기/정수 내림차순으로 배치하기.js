function solution(n) {
    var answer = Number(String(n).split("").sort((a,b) => b-a).join(""));
    
    return answer;
}