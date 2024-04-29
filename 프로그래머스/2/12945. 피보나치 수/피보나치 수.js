function solution(n) {
    var answer = 0;
            
    let a = 0;
    let b = 1;
    let c;
    let m = 1234567;
    
    for (let i = 2; i <= n; i++) {
        c = ((a%m)+(b%m))%m;
        a = b
        b = c
        
    }
    
    answer = (c% 1234567)
    return answer;
}