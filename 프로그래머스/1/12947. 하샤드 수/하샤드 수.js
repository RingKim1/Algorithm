function solution(x) {
    let answer;
    let isHarshad = String(x).split("").reduce((acc,i) => Number(acc) + Number(i));
    
    if(x % isHarshad === 0) {
        answer = true;
    } else { answer = false; }
    
    return answer;
}