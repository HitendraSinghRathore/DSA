class MaxHeap {
    //created max heap
    constructor(array) {
        this.heap = array;
        const size = array.length;
        for(let i = Math.floor((size -2) / 2 );i >=0; i-- ) {
            this.heapifyDown(i);
        }
    }

    peek() {
        return this.heap[0];
    }
    pop() {
        if(this.size() === 0) return;
        [this.heap[0], this.heap[this.size() -1]] = [this.heap[this.size() -1], this.heap[0]];
        const element = this.heap.pop();
        this.heapifyDown(0);
        return element;
    }
    push(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length -1);
    }
    size() {
        return this.heap.length;
    }
    heapifyUp(index) {
        let parent = Math.floor((index - 1) /2);
        while(index > 0 && this.heap[index] > this.heap[parent] ){
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = Math.floor((index - 1) /2);
        }
    }
    heapifyDown(index) {
        let largest = index;
        while(true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;
            if(left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            } 
            if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if(largest === index) return;
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            largest = index;
        }
    }   
}

const heap = new MaxHeap([3, 1, 7, 12, 9, 5]);

console.log(heap.peek());