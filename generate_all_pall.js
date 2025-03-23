function generatePerm(str) {
    
    function traverse(start, end) {
        if(start >  end) return new Set();
        if(start === end) return new Set(str[start]);
        const result = new Set();

        if(str[start] === str[end]) {
            const middle = traverse(start + 1, end  -1) ;
            for(let seq of middle) {
                result.add(str[start] + seq + str[end]);
            }
            result.add(str[start] + str[end]);
        }
        const leftSeq = traverse(start + 1, end);
        for(let seq of leftSeq) {
            result.add(seq);
        }
        const rightSeq = traverse(start, end - 1);
        for(let seq of rightSeq) {
            result.add(seq);
        }
        return result;
    }
    const res = traverse(0,str.length - 1);
return Array.from(res);
}

console.log(generatePerm('aabb'))