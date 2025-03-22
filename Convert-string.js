function convertPallindrome(str) {
    if(str.length === 0) {
        return -1;
    }
    const charFrequency = new Map();
    for(let i = 0; i < str.length;i++) {
        const count = charFrequency.get(str[i]) || 0;
        charFrequency.set(str[i], count + 1);
    }
    let oddCOund = 0, eventCiount = 0, oddChar = '';
    for(let [char, count] of charFrequency) { 
        if(count % 2 === 0) {
            eventCiount++;
        }   else {
                oddCOund++;
                oddChar = char;
        }
    }
    if(oddCOund > 1) { return  -1};
    let firstHalf = '';
    for(let [char,count] of charFrequency) {
        firstHalf = firstHalf + char.repeat(Math.floor(count / 2));
    }
    console.log(firstHalf + oddChar+ firstHalf.split('').reverse().join(''));

}
convertPallindrome('abcbdcd')