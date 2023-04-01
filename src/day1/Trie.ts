class Node {
    children: (Node | undefined)[] = new Array(26).fill(undefined);
    isEndOfWord = false;

    constructor(public value: string) {}

    hasChildren(): boolean {
        return this.children.some(Boolean);
    }
}

export default class Trie {
    private root: Node;
    constructor() {
        this.root = new Node("");
    }

    insert(item: string): void {
        let cur = this.root;

        for (const char of item) {
            let idx = this.getIdx(char);
            let node = cur.children[idx];
            if (!node) {
                node = cur.children[idx] = new Node(char);
            }
            cur = node;
        }
        cur.isEndOfWord = true;
    }

    delete(item: string): void {
        let cur = this.root;

        for (const char of item) {
            let idx = this.getIdx(char);
            let node = cur.children[idx];
            if (!node) {
                node = cur.children[idx] = new Node(char);
            }
            cur = node;
        }
        cur.isEndOfWord = false;
    }

    find(partial: string): string[] {
        var curr = this.root;

        for (let char of partial) {
            let idx = this.getIdx(char);
            let node = curr.children[idx];
            if (!node) {
                return [];
            }
            curr = node;
        }

        return (function findWords(
            node: Node,
            partial: string,
            results: string[],
        ) {
            if (node.isEndOfWord) {
                results.push(partial);
            }

            for (let child of node.children) {
                if (child) {
                    findWords(child, partial + child.value, results);
                }
            }

            return results;
        })(curr, partial, []);
    }

    private getIdx(ch: string): number {
        const base = "a".charCodeAt(0);
        return ch.toLowerCase().charCodeAt(0) - base;
    }
}
