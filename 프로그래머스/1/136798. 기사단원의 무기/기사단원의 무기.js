function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i<=number; i++) {
        let temp = 0;
        let sqrt = Math.sqrt(i)
        for (let j = 1; j<= sqrt; j++) {
            if (i % j === 0) {temp++
             if (j!==sqrt) {temp++}}
        }
        temp <= limit ? answer += temp : answer += power
    }
    return answer;
}