/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
    let min = prices[0];
    let max_profit = 0;

    for(let i=0; i<prices.length-1; i++){
        if (prices[i] > prices[i+1]) {
            min = Math.min(min, prices[i+1])
        } else {
            prices[i] = min
        }
        if (prices[i+1] - min > 0) {
            max_profit = Math.max(max_profit, prices[i+1] - min);
        }
    }

};

maxProfit([7,6,4,3,1])