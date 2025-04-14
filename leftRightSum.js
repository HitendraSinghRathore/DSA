function leftRightSum(arr) {
    const result = [];
    const totalSum = arr.reduce((a,b) => a + b, 0);
    let left = 0;
    let right = 0;

    for(let i=0;i < arr.length;i++) {
        right = totalSum - left - arr[i];

        result.push(Math.abs(left - right));

        left += arr[i];
    }
    return result;
}

console.log(leftRightSum([10,4,8,3]));