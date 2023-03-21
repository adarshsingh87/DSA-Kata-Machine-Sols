type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        let node = { value: item } as Node<T>;
        this.length++;
        if (this.length === 1) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head!.prev = node;
        this.head = node;
        return;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Index out of bounds");
        } else if (this.length === idx) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        let cur = this.head;
        for (let i = 0; i < idx; i++) {
            cur = cur!.next;
        }

        let node = { value: item } as Node<T>;

        let prev = cur!.prev;

        prev!.next = node;
        node.prev = prev;
        cur!.prev = node;
        node.next = cur;
        return;
    }
    append(item: T): void {
        if (this.length === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        let node = { value: item } as Node<T>;
        node.prev = this.tail;
        this.tail!.next = node;
        this.tail = node;
        return;
    }
    remove(item: T): T | undefined {
        let cur = this.head;
        for (let i = 0; i < this.length; i++) {
            if (cur!.value === item) {
                break;
            }
            cur = cur!.next;
        }
        if (!cur) return;
        return this.removeNode(cur);
    }
    get(idx: number): T | undefined {
        if (this.length < idx) return undefined;
        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            curr = curr?.next;
        }
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        if (this.length < idx) return undefined;
        let curr = this.head;
        for (let i = 0; i < idx; ++i) {
            curr = curr!.next;
        }
        if (!curr) return;
        return this.removeNode(curr);
    }

    private removeNode(node: Node<T>) {
        this.length--;
        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = node.prev = undefined;
        return node.value;
    }
}
