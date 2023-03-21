export default function two_crystal_balls(breaks: boolean[]): number {
    const jmpAm = Math.floor(Math.sqrt(breaks.length));
    let i = jmpAm;
    for (; i < breaks.length; i += jmpAm) {
        if (breaks[i]) {
            break;
        }
    }
    i -= jmpAm;
    for (let j = 0; j <= jmpAm; j++, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
