function solution(day, carNum) {
  let carNList = carNum.split(" ");
  let count = 0;
  
  carNList.map((num)=>{
    if (num % 10 === day) {
      count++;
    }
  })

  return count;
}

console.log(solution(0, "12 20 54 30 87 91 30"))

