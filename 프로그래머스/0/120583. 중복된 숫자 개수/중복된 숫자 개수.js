function solution(array, n) {
    return array.reduce((count, x) => x === n ? count + 1 : count, 0)
}