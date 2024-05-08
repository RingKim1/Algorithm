function solution(s) {
    
    let temp = s.split(``);
    temp.length % 2 === 0 ? answer = temp[Math.floor((temp.length-1)/2)]+temp[Math.ceil((temp.length-1)/2)] : answer = temp[Math.floor(temp.length/2)]
    return answer;
}