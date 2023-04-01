export default class MyMap<T extends string | number, V> {
    private localMap: Map<T, V>;

    constructor() {
        this.localMap = new Map<T, V>();
    }

    get(key: T): V | undefined {
        return this.localMap.get(key);
    }
    set(key: T, value: V): void {
        this.localMap.set(key, value);
        return
    }
    delete(key: T): V | undefined {
        let value = this.localMap.get(key)
        this.localMap.delete(key)
        return value
    }
    size(): number {
        let ans = 0
        this.localMap.forEach((_) => ans++)
        return ans
    }
}
