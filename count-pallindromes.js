
function isPallindrom(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left = left + 1;    
        right = right - 1;
    }
    return true;

}
function generatePerm(str, index, curr) {

    if(index === str.length) {
        console.log(curr)
        return isPallindrom(curr) && curr.length > 0 ? 1:  0 ;
    }
    const include = generatePerm(str, index + 1, curr + str[index]);
    const exclude = generatePerm(str, index + 1, curr);
    
    return  include + exclude;
}
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    console.log(generatePerm(s, 0, ''));
    // console.log(Array.from(result).length)
};

countSubstrings('aabb');