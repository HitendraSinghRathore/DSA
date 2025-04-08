function rotate(matrix) {
    const n = matrix.length;
    const rotatedMatrix = Array.from({length: matrix.length}, () => Array(matrix[0].length).fill(0));
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            rotatedMatrix[col][n-row-1] = matrix[row][col];
        }
    }
    return rotatedMatrix;
}


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));