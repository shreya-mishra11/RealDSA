// Max Heap

class MaxHeapInsertion{
    constructor(){
            this.heap = []
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp(){
        let index = this.heap.length-1;

        while(index > 0){
            let parentIdx = Math.floor((index-1)/2)
            if(this.heap[parentIdx] < this.heap[index] ){
                [this.heap[parentIdx],this.heap[index]] = [this.heap[index], this.heap[parentIdx]]
                index = parentIdx
            }else break;

        }
    }

}

const heap = new MaxHeapInsertion();

heap.insert(50);
heap.insert(30);
heap.insert(40);
heap.insert(10);
heap.insert(45);

console.log(heap.heap);


class MinHeapInsertion{
    constructor(){
        this.minHeap= []
    }

    insert(value){
        this.minHeap.push(value);
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.minHeap.length-1;

        while(index > 0){
            let parentIdx = Math.floor((index-1)/2)
            if(this.minHeap[parentIdx] > this.minHeap[index] ){
                [this.minHeap[parentIdx],this.minHeap[index]] = [this.minHeap[index], this.minHeap[parentIdx]]
                index = parentIdx
            }else break;

        }
    }
}

const minHeap = new MinHeapInsertion();

minHeap.insert(50);
minHeap.insert(30);
minHeap.insert(40);
minHeap.insert(10);
minHeap.insert(45);

console.log(minHeap.minHeap);