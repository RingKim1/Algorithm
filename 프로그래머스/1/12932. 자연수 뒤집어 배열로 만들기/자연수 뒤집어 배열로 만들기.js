function solution(n) {
    var answer = [];
    let tempN=String(n);
    
    for (let i=tempN.length-1;i>=0;i--) {
        answer.push(Number(tempN[i]));
    }
    return answer;
}