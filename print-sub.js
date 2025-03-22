function solveNumers(str) {
    let length = -1;
    function expand(start) {
        const visitedChars = [];
        let length = 0
        while(start < str.length && !visitedChars.includes(str[start]) ) {
            visitedChars.push(str[start++]);
            length++;
        }
        // console.log(visitedChars);
        return length;
    }
    for(let i=0; i< str.length;i++) {
        length= Math.max(expand(i), length);
    }
    console.log(length);

}
solveNumers('abcabcbb')