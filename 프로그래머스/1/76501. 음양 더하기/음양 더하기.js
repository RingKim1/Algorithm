function solution(absolutes, signs) {
    let temp = [];
    for(let i=0;i<signs.length;i++){
        if(signs[i] === true){
            temp.push(absolutes[i])
        } else {
            temp.push(absolutes[i]*-1)
        }
    }
    let answer = temp.reduce((acc,i) => acc+=i);
    
    return answer;
}