
function generateComb(str, index) {
    if(index === str.length) {
         console.log(str.join(''));
        return;
    }
    for(let i = index; i < str.length; i++) {
        let temp = str[index];
        str[index] = str[i];
        str[i] = temp;
       
        generateComb(str, index + 1);
 
        temp = str[index];
        str[index] = str[i];
        str[i] = temp;
    }
}
generateComb(['a', 'b', 'c'],0)