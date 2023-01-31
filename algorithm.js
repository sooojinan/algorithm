/**
 * @param {string}
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const changeRoman = ['C','X','I'];

  let result = 0;

  for (let i = 0; i < s.length; i++) {


    if (!s[i+1]) {
        result += roman[s[i]];
        continue;
    }

    if (s[i] === s[i+1]) {
        result += roman[s[i]];
        continue;
    }

    if (!changeRoman.includes(s[i])) {
        result += roman[s[i]];
        continue;
    }

    if (roman[s[i+1]] <= roman[s[i]]) {
        result += roman[s[i]];
        continue;
    }

    result += roman[s[i+1]] - roman[s[i]]
    i++;

  }

  return result;
};

romanToInt("DCXXI");