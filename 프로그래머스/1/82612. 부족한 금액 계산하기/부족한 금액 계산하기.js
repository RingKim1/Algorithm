function solution(price, money, count) {
    let total = 0;
    for(let i=0; i <= count; i++) {total += i*price;}
    return money - total >= 0 ? 0 : Math.abs(money-total)
}