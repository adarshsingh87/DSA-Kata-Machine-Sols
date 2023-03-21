function partition(arr: number[], start: number, end: number) {
    const pivot = arr[end];

    let idx = start - 1;

    for (let i = start; i < end; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    arr[end] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

function qs(arr: number[], start: number, end: number) {
    if (start >= end) return;

    const pivot = partition(arr, start, end);
    qs(arr, start, pivot - 1);
    qs(arr, pivot + 1, end);
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
