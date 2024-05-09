function solution(a, b) {
    const answer = a.reduce((sum,value,i)=>{return sum += value*b[i]},0);
    return answer;
}