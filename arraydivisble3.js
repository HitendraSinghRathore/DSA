function arrayCheck(arr) {
    const mod =  {0 : -1};
    let maxLen = 0, prefixSum = 0;

    for(let i=0;i< arr.length;i++) {
        prefixSum += arr[i];
        const modVal = prefixSum % 3;

        if(modVal in  mod) {
            maxLen = Math.max(maxLen, i - mod[modVal]);
        }  else {
            mod[modVal] = i;
        }
        
    }
    return maxLen;

}



console.log(arrayCheck([1, 2, 3,4]));