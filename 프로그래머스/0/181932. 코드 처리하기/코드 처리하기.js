function solution(code) {
    let mode = 0;
  const result = code.split('').reduce((ret, char, idx) => {
    if (char === '1') {
      return (mode = 1 - mode, ret);
    }
    if (mode === 0 && idx % 2 === 0) {
      return ret + char;
    }
    if (mode === 1 && idx % 2 !== 0) {
      return ret + char;
    }
    return ret;
  }, '');

  return result.length === 0 ? 'EMPTY' : result;
}
