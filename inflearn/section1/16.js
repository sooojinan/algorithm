function solution(string) {
  let _str = string.split('')
  let result = []

  _str.map((s)=>{
    if (result.indexOf(s) === -1) {
      result.push(s)
    } 
  })

  return result.join('')
}

console.log(solution("ksekkset"))

