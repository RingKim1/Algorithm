function solution(numbers) {
    let temp = [];
    for(let i = 0; i<10; i++) {
        if(numbers.includes(i) === false) {
            temp.push(i);
        }
    }
    
    
    
    var answer = temp.reduce((acc,e)=> acc + e);
    return answer;
}