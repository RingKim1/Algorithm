function solution(phone_number) {
    var answer = '';
    
    let result = String(phone_number).split("").reverse();
    
    let temp = result.reduce((acc,cur,i)=>
        i<4? acc+=cur : acc+=`*`
    );
    
    answer = temp.split("").reverse().join("");

    return answer;
}