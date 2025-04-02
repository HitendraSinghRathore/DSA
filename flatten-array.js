function flattenArr(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) acc.push(...flattenArr(curr));
        else 
            acc.push(curr);
        return acc;
    },[])
}

console.log(flattenArr([1,[2],[3,[4,[5,6]]]]));