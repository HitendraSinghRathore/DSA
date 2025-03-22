function knacpsack(values, weights, limit) {
    let items = values.length;
    const dp = Array.from({length: items + 1}, () => Array(limit + 1).fill(0));
    for(let i = 1; i <=items; i++) {
        for(let w = 1; w <= limit ; w++) {
            if(weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i-1][w],
                    dp[i-1][w - weights[i -1]] + values[i - 1]
                )
            }
        }
    }
    console.log(dp)
    console.log(dp[items][limit]);
}

knacpsack([1, 2, 3],[4, 5, 1], 4);