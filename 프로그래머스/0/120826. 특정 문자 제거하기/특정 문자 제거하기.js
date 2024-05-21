function solution(my_string, letter) {
    const answer = my_string.split("").filter((el)=>el !== letter).join("");
    return answer;
}