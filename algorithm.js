/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let outerArr = []; 
    let innerArr=[];

    for (let  i=1; i<numRows+1; i++) {
        innerArr=[];
        for(let j=1; j<i+1; j++) {

            if (j===1 || j===i) {
                innerArr.push(1);
                continue;
            } else {
                innerArr.push((outerArr[i-2][j-2] + outerArr[i-2][j-1]))
            }        
        }
    }

    return outerArr;
};