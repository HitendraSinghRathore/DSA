function generatePerm(str) {
    if(str.length === 0) return [];
    function traverse(start,end) {
        if(start > end) return new Set();
        if(start === end ) return new Set([str[start]]);

        let result = new Set();
        if(str[start] === str[end]) {
            const mid = traverse(start + 1, end - 1);
            for(let seq of mid) {
                result.add(str[start] + seq + str[end]);
            }
            result.add(str[start] + str[end]);
        }
        const left = traverse(start + 1, end);
        for(const seq of left) {
            result.add( seq);
        }
        const right = traverse(start , end - 1);
        for(const seq of right) {
            result.add(seq);
        }
        return result;
    }
    const result = traverse(0,str.length - 1);
    return Array.from(result);
}

console.log(generatePerm('abcbdcd'))