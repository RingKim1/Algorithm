function solution(numbers) {
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    var answer = sum / numbers.length;
    
    return answer;
}