/**
 * Print length of non repeated substring with no repeated chars
 * Using sliding window
 * @param {*} str 
 */
function solveNumers(str) {
    const lastSeen = new Map();
    let maxLen = 0;
    let left = 0;
    for(let right = 0; right < str.length; right++) {
        if(lastSeen.has(str[right])) {
            left = Math.max(left, lastSeen.get(str[right]) + 1);
        }
        lastSeen.set(str[right], right);
        maxLen = Math.max(maxLen, right - left + 1);

    }
    console.log( maxLen)
}
solveNumers('abcabcbb')