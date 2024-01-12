function solution(string) {
  let str = string.split(' ');
  let count = 0;
  let curr = null

  for(let i=0; i<str.length; i++) {

    if (i===0 || curr < str[i]) {
      curr = str[i];
      count ++;
      continue;
    }
  }

  return count;
  
}

console.log(solution("130 135 148 140 145 150 150 153"))