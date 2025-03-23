function knacpsack(values, weights, limit) {
   let items = values.length;
   const dp = Array.from({length: items + 1}, () => Array(limit + 1).fill(0));

   for(let i=1;i<=items;i++) {
    for(let j=1;j<=limit;j++) {
        if(weights[i-1] <=j) {
            dp[i][j] = Math.max(dp[i-1][j], (dp[i-1][j-weights[i-1]] + values[i-1]));
         } else {
            dp[i][j] = dp[i-1][j];
         }
    }
   }
   console.log(dp[items][limit]);
}

knacpsack([1, 2, 3],[4, 5, 1], 4);