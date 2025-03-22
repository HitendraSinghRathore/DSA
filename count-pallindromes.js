
function generatePerm(str, start, end) {

    if(start >  end) return [];
    if(start === end) return [str[start]];
    const result = [];
    if(str[start] === str[end]) {
        const middlePallindromes = generatePerm(str, start + 1, end - 1);
        for(let seq of middlePallindromes) {
            result.push(str[start]+ seq+ str[end]);
        }
    }
    const leftPallindromes = generatePerm(str, start + 1, end);
    const rightPallindromes = generatePerm(str, start , end - 1);
     for(let seq of leftPallindromes) {
         result.add(seq)
     }
     for(let seq of rightPallindromes) {
        result.add(seq)
    }
    return result;
}
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    console.log(generatePerm(s, 0, s.length - 1));
    // console.log(Array.from(result).length)
};

countSubstrings('aaa');