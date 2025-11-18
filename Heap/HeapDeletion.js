// maxHeap
class Heap{
    constructor(){
        this.heap= []
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length-1;

        while(index>0){
            let parentIdx = Math.floor((index-1)/2);

            if(this.heap[parentIdx] < this.heap[index]){
                [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
                index = parentIdx;
            }else{
                break;
            }
        }
    
    }

    delete(){
        if(this.heap.length === 0 )return null;
        if(this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.heapifyDown()

        return max;


    }

    heapifyDown(){
        let index = 0;
        const length = this.heap.length;

        while(true){
            let left = 2*index+1;
            let right = 2*index+2;

            let largest = index;

            if(left<length && this.heap[left] > this.heap[largest]){
                largest = left;
            }
            if(right < length && this.heap[right]> this.heap[largest]){
                largest = right;
            }
            if(largest === index) break;

            [this.heap[index], this.heap[largest]] = [this.heap[largest],this.heap[index]]
            index = largest;
        }

    }
}

const heap = new Heap();

heap.insert(50);
heap.insert(30);
heap.insert(40);
heap.insert(10);
heap.insert(45);

console.log("Before deletion:", heap.heap);

console.log("Deleted:", heap.delete());

console.log("After deletion:", heap.heap);

// MinHeap

class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length -1;
        while(index > 0){
            let parentIdx = Math.floor((index-1)/2)
            if(this.heap[parentIdx]>this.heap[index]){
                [this.heap[parentIdx],this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
                index = parentIdx
            }
            else{
                break;
            }
        }
    }

    extractMin(){
        if(this.heap.length=== 0) return null;
        if(this.heap.length === 1) this.heap.pop()
        let min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return min
    }

    heapifyDown(){
        let index  = 0;
        let length = this.heap.length;

        while(true){
            let left = 2*index+1;
            let right = 2*index+2;
            let minimum = index;

            if(left < length && this.heap[left] < this.heap[minimum] ){
                minimum = left;
            }
            if (right < length && this.heap[right] < this.heap[minimum]){
                minimum = right;
            }
            if(minimum === index) break;

            [this.heap[index],this.heap[minimum]] = [this.heap[minimum],this.heap[index]]
            index = minimum
        }
    }




}

const deletionMinHeap = new MinHeap();

deletionMinHeap.insert(10);
deletionMinHeap.insert(20);
deletionMinHeap.insert(30);
deletionMinHeap.insert(5);
deletionMinHeap.insert(15);

console.log("Before deletion:", deletionMinHeap.heap);

console.log("Deleted:", deletionMinHeap.extractMin());

console.log("After deletion:", deletionMinHeap.heap);
