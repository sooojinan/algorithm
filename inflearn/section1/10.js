function solution(string, word) {
  let result = string.split('').filter((s)=>{
    return s === word
  }).length;

  return result

}

console.log(solution("COMPUTERPROGRAMMING", "R"))

