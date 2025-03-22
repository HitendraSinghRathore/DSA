
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxCount = -1;
    const row = grid.length;
    const col = grid[0].length;

    function burnIsland(i, j, count) {
        if(i >= row || j >= col || i < 0 || j < 0  || grid[i][j] === 0) {
            return count;
        }

        grid[i][j] = 0;
        count = count + 1;

       
        count = burnIsland(i+1, j, count);
        count = burnIsland(i, j+ 1, count);
        count = burnIsland(i -1, j, count);
        count = burnIsland(i, j - 1, count);
       return count;

    }
    for(let i = 0; i< row;i++) {
      for(let j = 0; j< col;j++) {
        const islandArea = burnIsland(i,j,0);
       
        maxCount = Math.max(islandArea,maxCount);

      }
    }
   
    return maxCount
};