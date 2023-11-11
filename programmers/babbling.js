function solution(babbling) {
    var answer = 0;
    
    const list = ["aya", "ye", "woo", "ma"]
    
    const checkList = (word) => {
        for(let i = 0; i<list.length;) {
            if (word.startsWith(list[i])) {
                word = word.replace(list[i],'');
                i = 0;
            } else {
                i++;
            }
        }

        if (word === '') {
            return true
        }
    }
    
    babbling.map((word, index)=>{
        let can_speak = checkList(word);
        if (can_speak) {
            answer++;
        }
            
    })
    return answer;
}

// console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))