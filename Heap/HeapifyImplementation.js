class Heapify {
    constructor(arr = []) {
        this.heap = arr;
        this.buildHeap();
    }

    buildHeap() {
        let n = this.heap.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.shiftDown(i);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(i) {
        while (i > 0) {
            let parentIdx = Math.floor((i - 1) / 2);

            if (this.heap[parentIdx] < this.heap[i]) {
                [this.heap[i], this.heap[parentIdx]] =
                    [this.heap[parentIdx], this.heap[i]];
                i = parentIdx;
            } else break;
        }
    }

    shiftDown(i) {
        const n = this.heap.length;

        while (true) {
            let largest = i;
            let left = 2 * i + 1;
            let right = 2 * i + 2;

            if (left < n && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < n && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];

        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.shiftDown(0);

        return max;
    }

    print() {
        console.log(this.heap);
    }
}


const heap = new Heapify([3, 9, 2, 1, 4, 5]);
heap.print(); 

heap.insert(10);
heap.print();

console.log(heap.extractMax());
heap.print();
