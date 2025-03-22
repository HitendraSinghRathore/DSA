// Given a string find the longest palindromic substring


function exapnd(str, i, j) {
    while (str[i] == str[j] && i >=0 && j < str.length) { 
        i = i- 1;
        j = j + 1;
    }
    return str.substring(i+1, j);
   
}
function longestPalindrome(str) {
    let result = '';
    for(let  i =0;i< str.length - 1;i++) {
        const evenCented = exapnd(str, i,i);
        const oddCented = exapnd(str, i,i + 1);
        if(evenCented.length > result.length) {
            result = evenCented;
        } 
        if (oddCented.length > result.length) {
            result = oddCented;
        }
    }
    return result;
}


console.log(longestPalindrome('abccccdd'));