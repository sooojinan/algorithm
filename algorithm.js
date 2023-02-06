/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    const string = s.trim();
    const strArr = string.split(' ');
    return strArr.at(-1).length;
};
lengthOfLastWord("   fly me   to   the moon  ");