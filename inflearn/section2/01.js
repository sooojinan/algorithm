function solution(string) {
  let str = string.split(' ');
  let result = [];
  let curr = -1;


  for (let i=0; i<str.length; i++) {

    if (curr < Number(str[i])) {
      result.push(str[i]);
    }

    curr = str[i]
  }

  console.log(result)
  
}

console.log(solution("7 3 9 5 6 12"))