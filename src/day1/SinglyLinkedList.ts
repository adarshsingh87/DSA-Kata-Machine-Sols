type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        let node = { value: item } as Node<T>;
        node.next = this.head;
        this.head = node;
        if (this.length === 0) {
            this.tail = node;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of range");
        }

        if (idx === 0) {
            return this.prepend(item);
        }

        if (idx === this.length) {
            return this.append(item);
        }

        var curr = this.getAt(idx - 1);

        if (curr) {
            var node = { value: item } as Node<T>;

            node.next = curr.next;
            curr.next = node;

            this.length++;
            return;
        }
    }
    append(item: T): void {
        var node = { value: item } as Node<T>;
        this.length++;

        if (this.length === 1) {
            this.tail = this.head = node;
            return;
        }

        this.tail!.next = node;
        this.tail = node;
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }

        if (this.head.value === item) {
            return this.removeHead();
        }

        for (let i = this.head; i.next; i = i.next) {
            if (i.next.value === item) {
                return this.removeNextNode(i);
            }
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx === 0) {
            return this.removeHead();
        }

        var node = this.getAt(idx - 1);

        if (!node) {
            return undefined;
        }

        return this.removeNextNode(node);
    }

    private getAt(idx: number) {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        var curr = this.head;

        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        return curr;
    }

    private removeHead() {
        if (!this.head) {
            return undefined;
        }

        var value = this.head.value;
        this.head = this.head.next;

        if (this.length === 1) {
            this.tail = this.head;
        }

        this.length--;
        return value;
    }

    private removeNextNode(node: Node<T>) {
        if (!node.next) {
            return undefined;
        }

        var toBeDeleted = node.next;
        node.next = node.next.next;

        if (toBeDeleted === this.tail) {
            this.tail = node;
        }

        this.length--;
        return toBeDeleted.value;
    }
}
