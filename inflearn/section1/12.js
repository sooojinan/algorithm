function solution(string) {
  // 정규식으로 풀면 될 것 같은데...
  let _str = string.split('')

  _str = _str.map((s)=>{
    return s.toUpperCase()
  })

  _str = _str.join('');
  
  return _str;
}

console.log(solution("ItisTimeToStudy"))

