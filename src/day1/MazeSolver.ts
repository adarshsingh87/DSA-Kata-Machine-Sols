const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curPoint: Point,
    ending: Point,
    seen: boolean[][],
    path: Point[],
) {
    // base case
    // at the end ?
    if (curPoint.x === ending.x && curPoint.y === ending.y) {
        path.push(ending);
        return true;
    }
    // off the map
    if (
        curPoint.y >= maze.length ||
        curPoint.x >= maze[0].length ||
        curPoint.x < 0 ||
        curPoint.y < 0
    ) {
        return false;
    }
    // hit the wall
    if (maze[curPoint.y][curPoint.x] === wall) {
        return false;
    }
    //seen
    if (seen[curPoint.y][curPoint.x]) return false;

    // recurse
    //pre
    seen[curPoint.y][curPoint.x] = true
    path.push(curPoint);
    // recurse

    for (const i of directions) {
        const res = walk(
            maze,
            wall,
            { x: curPoint.x + i[0], y: curPoint.y + i[1] },
            ending,
            seen,
            path,
        );
        if (res) {
            return true;
        }
    }

    //post
    path.pop();
    return false
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    let seen: boolean[][] = [];
    let path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        const element = maze[i];
        seen.push(new Array(element.length).fill(false));
    }
    walk(maze, wall, start, end, seen, path)
    return path
  }
