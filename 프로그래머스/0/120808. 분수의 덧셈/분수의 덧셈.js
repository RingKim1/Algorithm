function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let tempnumer = numer1*denom2 + numer2*denom1;
    let tempdenom = denom1 *denom2;
    
    // 최대 공약수
    let n;
    for (let i=1;i<=tempdenom;i++) {
        if(tempdenom%i===0 && tempnumer%i===0){
        n = i;
        } 
    }

    answer = [tempnumer/n, tempdenom/n]
    return answer;
}