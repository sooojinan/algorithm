function solution(n) {
  let count = 0;

  if (n % 12 !== 0) {
    count = (n/12) + 1;
  } else {
    count = (n/12);
  }

  return Math.floor(count);

}

console.log(solution(178))

