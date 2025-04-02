// function courseSchedule(n, arr) {
//     const graph = {};
//     const recSet = new Set();
//     const seenSet = new Set();
//     for(let item of arr) {
//         if(!graph[item[0]]) {
//             graph[item[0]] = []
//         } 
//         graph[item[0]].push(item[1]);

//         if(!graph.hasOwnProperty(item[1])) {
//             graph[item[1]] = []
//         }
        
//     }
//     function dfs(node) {
//         if(recSet.has(node)) return true;
//         if(seenSet.has(node)) return false;
        
//         recSet.add(node);
//         seenSet.add(node);

//         for(let dep of graph[node]) {
//             if(dfs(dep)) return true;
//         }
//         recSet.delete(node);
//         return false;

//     }
//     for(let course in graph ) {
//         if(dfs(course)) return true;
//     }
//     return false;
// }   


function courseSchedule(n,arr) {
    const graph = {};
    const visitedSet = new Set();
    const recSet = new Set();
    const orderList = [];

    for(let [from, to] of arr ) {
        if(!graph[from]) graph[from] = [];
        graph[from].push(to);

        if(!graph.hasOwnProperty(to))  graph[to] = [];

    }

    function traverse(node) {
        if(recSet.has(node)) return true;

        if(visitedSet.has(node)) return false;
        
        visitedSet.add(node);
        recSet.add(node);

        for(let dep of graph[node]) {
            if(traverse(dep)) return true;
        }
        recSet.delete(node);
        orderList.push(node);
        return false;
    }

    for(let i=0;i<n;i++) {
        if(!visitedSet.has(i)) {
            if(traverse(i)) return false;

        }
    }
    console.log(orderList)
}   


courseSchedule(4,[[1, 2], [2, 1], [0, 3]]);