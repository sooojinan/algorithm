function solution(string) {
  // 정규식으로 풀면 될 것 같은데...
  let _str = string.split('')
  _str = _str.filter((s)=>{
    if ( s === s.toUpperCase()) {
      return true
    }
    return false
  }).length

  return _str
}

console.log(solution("KoreaTimeGood"))

