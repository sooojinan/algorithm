/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = [];
    let index = 0;
    let isContain = false;
    
    for(let i=0; i<strs[0].length; i++) {
        const char = strs[0][index];

        for (let j=0; j<strs.length; j++) {
            if (strs[j][index] === char) {
                isContain = true;
                continue;
            } else {
                isContain = false;
                break;
            }
        }

        if (isContain) {
            result.push(char)
            index++;
        } else {
            break;
        }
    }

    return result.join('')

};
longestCommonPrefix(["aaa","aa","aaa"]) 