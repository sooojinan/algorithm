function solution(string) {

  let result = ''; 
  let _str = string.split('')

  if (string.length % 2 !== 0) {
    return result = string[Math.floor(string.length/2)]
  } else {
    let index = Math.floor(string.length/2)
    console.log('index',index)
    return result = `${string[index-1]}${string[index]}`
  }

}

console.log(solution("gxx00xxg"))

