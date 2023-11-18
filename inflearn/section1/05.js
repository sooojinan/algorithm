function solution(nString) {
  let nList = nString.split(' ');
  let result = nList[0];
  
  for(let i=1; i<nList.length-1; i++) {
    result = Math.min(result, nList[i+1])
  }

  return result
  
}

console.log(solution("1 3 7 11 2 15 17"))

