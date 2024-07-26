function solution(str_list) {
    let answer = [];
    
    const indexL = str_list.indexOf("l");
    const indexR = str_list.indexOf("r");

    // "l"이 먼저 나오거나 존재하지 않을 때
    if (indexL !== -1 && (indexR === -1 || indexL < indexR)) {
        answer = str_list.slice(0, indexL);
    } 
    // "r"이 먼저 나오거나 존재하지 않을 때
    else if (indexR !== -1) {
        answer = str_list.slice(indexR + 1);
    }

    return answer;
}
