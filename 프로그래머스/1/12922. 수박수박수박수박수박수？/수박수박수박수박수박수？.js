function solution(n) {
    let temp = [];
    for (let i = 0; i<n; i++) {
        i % 2 === 0? temp.push("수") : temp.push("박")
    }
    var answer = temp.join("");
    return answer;
}