function solution(n) {
    var answer = 0;
    for(let x = 1; x<=n; x++){
    if(n % x === 1) {
        answer = x;
        break;
    }
    }
    
    
    return answer;
}