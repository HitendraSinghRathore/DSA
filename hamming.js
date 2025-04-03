function hammingDistance(str1, str2) {
    let hammingDistance = 0;
    if(str1.length !== str2.length) {
        throw new Error("Strings must be of equal length");
    }

    for(let i=0;i < str1.length;i++) {
        if(str1[i] !== str2[i]) {
            hammingDistance++;
        }
    }
    return hammingDistance;
}

console.log(hammingDistance('abbcsbw','abccsbq'));