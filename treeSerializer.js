/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) return JSON.stringify([]);
    
    let queue = [root];
    let res = [];
    
    while(queue.length > 0) {
        let node = queue.shift();
        if (node === null) {
            res.push("null");
        } else {
            res.push(node.val);
            // Even if the child is null, add it to the queue so that missing children are recorded.
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    
    // Optional: Remove trailing "null" values to compress the output.
    while (res.length && res[res.length - 1] === "null") {
        res.pop();
    }
    
    return JSON.stringify(res);
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = JSON.parse(data);
    if (arr.length === 0) return null;
    
    const root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();
        
        // Left child.
        if (arr[i] !== "null") {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        
        // Check if there is an element for the right child.
        if (i < arr.length && arr[i] !== "null") {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    
    return root;
};

