function solution(n, m) {
  let answer = [];
  if (n >= m) {
    for (let i = n; i >= 1; i--) {
      if (n % i === 0 && m % i === 0) {
        answer.push(i);
        break;
      }
    }
  } else {
    for (let i = m; i >= 1; i--) {
      if (n % i === 0 && m % i === 0) {
        answer.push(i);
        break;
      }
    }
  }
  for (let i = n; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
  }
  return answer;
}

console.log(solution(2, 5));
