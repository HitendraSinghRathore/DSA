function generateStringPerms(arr, index) {
    if(index === arr.length) {
        console.log(arr.join(''));
    }
    for( let i = index; i< arr.length ; i++) {
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
        generateStringPerms(arr, index + 1);
        temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
}
generateStringPerms(['a', 'b', 'c'], 0);