function solution(num_list) {
    var answer = [0,0];
    for (let key of num_list)
        if(key % 2 === 0) {
            answer[0] += 1
        } else {answer[1] += 1}
    return answer;
}