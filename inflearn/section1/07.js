function solution(nString) {
  let nList = nString.split(' ');
  let sum = 0;
  let min = Infinity;
  
  for(let i=0; i<nList.length; i++) {
    // 홀수라면
    if ((Number(nList[i]))%2 !== 0) {
      sum += Number(nList[i]);
      min = Math.min(min, nList[i])
    }
  }

  return {
    'sum': sum,
    'min' : min
  }
  
}

console.log(solution("12 77 38 41 53 92 85"))

