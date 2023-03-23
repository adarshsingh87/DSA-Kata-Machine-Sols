export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data.push(value)
        this.heapifyUp(this.length)
        this.length++
    }
    delete(): number {
        if(this.length===0) return -1
        const firstElem = this.data[0]
        if(this.length===1) {
            this.data=[]
            this.length=0
            return firstElem
        }
        const lastElem = this.data.pop() ?? 0
        this.data[0] = lastElem
        this.length--
        this.heapifyDown(0)
        return firstElem
        
    }

    private heapifyUp(idx: number) {
        if(idx === 0) return
        const parentIndex = this.getParentIndex(idx)
        const value = this.data[idx]
        const parentValue = this.data[parentIndex]
        if(value < parentValue) {
            this.data[idx] = parentValue
            this.data[parentIndex] = value
            this.heapifyUp(parentIndex)
        }
        return
    }
    private heapifyDown(idx: number) {
        if(idx >= this.length) return
        const lIndex = this.getLeftIndex(idx)
        if(lIndex >= this.length) return
        const rIndex = this.getRightIndex(idx)
        const lValue = this.data[lIndex]
        const rValue = this.data[rIndex]
        const value = this.data[idx]
        if(value > rValue && rValue < lValue) {
            this.data[idx] = rValue
            this.data[rIndex] = value
            this.heapifyDown(rIndex)
        } else if (value > lValue && lValue < rValue) {
            this.data[idx] = lValue;
            this.data[lIndex] = value;
            this.heapifyDown(lIndex);
        }
        return
    }
    private getLeftIndex = (parentIndex: number) => 2 * parentIndex + 1;
    private getRightIndex = (parentIndex: number) => 2 * parentIndex + 2;
    private getParentIndex = (index: number) => Math.floor((index - 1) / 2);
}
