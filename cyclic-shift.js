// function cyclicShift(array, shift) {
//     if(shift < 0) {
//         throw new Error("Shift must be greater than or equal to 0");
//     }
//     for(let i=1;i<=shift;i++) {
//         const item = array.shift();
//         array.push(item);
//     }
//     return array
// }

// console.log(cyclicShift([1,2,3,4,5,6,7,8,9,10],3));


function canSortByCyclicShift(array) {
    if(array.length  === 0) {
        return -1;
    }
    let breakIndex = -1, breakCount = 0;
    for(let i=0;i<array.length - 1;i++) {
        if(array[i] > array[i+1]) {
            breakIndex = i;
            breakCount++;
            if(breakCount > 1) {
                return -1;
            }
        }
    }
    return breakIndex + 1;
}

console.log(canSortByCyclicShift([4,5,6,7,8,9,10,1,2,3,0]));