function solution(array) {
    array.sort((a,b)=>a-b)
    var answer = array.length % 2 === 0 ? array[array.length/2] : array[Math.floor(array.length/2)]
    return answer;
}