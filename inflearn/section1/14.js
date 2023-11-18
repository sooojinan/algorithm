function solution(list) {

  let result = ''; 
  let maxLength = 0; 

  list.map((item)=>{
    if (item.length > maxLength) {
      maxLength = item.length
      result = item
    }
  })

  return result
  
}

console.log(solution(["teacher", "time", "student", "beautiful", "good"]))

