function minFlip(target) {
    let current = 0;
    let flips = 0;
    for(let val of target) {
        if(val != current) {
            flips++;
            current = val;
        }
    }
    return flips;
}

console.log(minFlip([0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,]))    