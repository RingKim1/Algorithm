function solution(s) {
    if (s.length !== 4 && s.length !== 6) {return false}
    let temp = s.split("").filter((x)=>{return (typeof(x-1) === "number" && Number.isNaN(x-1) !== true)}).join("");
    return temp.length === s.length ? true : false;
}