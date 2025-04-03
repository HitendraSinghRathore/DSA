function flattenObj(obj) {
    const output = {};
    function traverse(item, path = '') {
        if(typeof item === 'object' && item !== null) {
            for(let [key, value] of Object.entries(item) ) {
                const updatedPath = `${path ? Array.isArray(item) ? path + '[' + key + ']' : path  + '=>' + key: key}`
                traverse(value, updatedPath);
            }
        } else {
            output[path]  = item;
        }
    }
    traverse(obj)
    return output;
}


console.log(flattenObj({
    a:1,
    b: {
        c: [
            {
                d: 2,
                e: 5
            },
            72
        ],
        x: null
    }
}))