function solution(myString, pat) {
    return myString.replaceAll("A","C").replaceAll("B","A").replaceAll("C","B").includes(pat) ? 1:0
    
}