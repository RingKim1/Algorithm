function solution(my_string, k) {
    let answer = '';
    while(k > 0) {answer += my_string; k--;}
    return answer;
}