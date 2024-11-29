function solution(my_string) {
    return my_string.split("").filter(el=>el !== "a" && el !== "e" && el !== "i" && el !== "o" && el !== "u").join("")
}