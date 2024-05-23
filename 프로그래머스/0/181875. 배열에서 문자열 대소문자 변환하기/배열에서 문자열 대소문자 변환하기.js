function solution(strArr) {
  let answer = strArr.map((el, index) => {
    return index % 2 === 0 ? strArr[index].toLowerCase() : strArr[index].toUpperCase();
  });
  return answer;
}