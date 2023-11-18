// 강의보기

function solution(heightString) {
  let hList = heightString.split(" ");
  let result = [];
  let count = 0;
  let sum = 0;

  for(let i=0; i<hList.length; i++) {
    console.log('hList[i]',(hList[i]))

    console.log('sum  + Number(hList[i])',sum  + Number(hList[i]))

    let left = 100 - sum;
    console.log('left => ',left)

    if (sum  + Number(hList[i]) <= 100 && count < 7) {
      sum += Number(hList[i]);
      result.push(Number(hList[i]))
      count++;
    } else {
      continue;
    }

    console.log('sum => ',sum )
    console.log('count => ',count)
  }


  return result;
}

console.log(solution("20 7 23 19 10 15 25 8 13"))

