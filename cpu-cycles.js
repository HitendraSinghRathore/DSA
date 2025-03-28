
function compute(tasks, idle) {
    const executionStack = [];
    const mapFreq = new Map();
    function findNextTask() {
        for(let i = 0; i< tasks.length; i++) {
            const value = tasks[i]
            if(!mapFreq.get(value) ) {
                tasks.splice(i,1);
                mapFreq.set(value, idle);
                return value;
            }
        }
        return null;

    }
    while(tasks.length > 0) {
       
        const task = findNextTask();
        if(task) {
            executionStack.push(task);
        } else {
            executionStack.push('');
        }
        for(let [key,value] of mapFreq) {
            //simulate cycle
            if(key !== task)
                mapFreq.set(key, value - 1 < 0 ? 0 :  value - 1 );
        }
    } 
    return executionStack.length;
}

console.log(compute(['x','x','y','y'], 2))