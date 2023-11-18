function solution(string) {
  let result = []

  string.map((s)=>{
    if (result.indexOf(s) === -1) {
      result.push(s)
    }
  })

  return result
}

console.log(solution(["good", "time", "good", "time", "student"]))

