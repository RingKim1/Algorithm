function solution(numbers) {
    const temparr = numbers.sort((a,b) => b-a)
    return temparr[0]*temparr[1]
}