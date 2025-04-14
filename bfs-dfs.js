function dfs(node) {
    if(!node) return;
    console.log(node);
    dfs(node.left);
    dfs(node.right);
}

function processDsf(node) {
    const stack = [];
    stack.push(node);
    while(stack.length) {
        const curr = stack.pop();
        console.log(curr);
        if(curr.left) stack.push(curr.left);
        if(curr.right) stack.push(curr.right);
    }
}


function bfs(node) {
    const queue = []
    queue.push(node);
    while(queue.length) {
    const curr = queue.shift();
        console.log(curr);
        if(curr.left) queue.push(curr.left);    
        if(curr.right) queue.push(curr.right);
    }
}