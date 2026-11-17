// Knight can move +-1, 2 or +-2, 1.
// Can never go out of bounds (<0, >7)
// search depth to uncover shortest path

const knightMoves = (start, goal) => {
    checkInput(start, goal);
    const moveOptions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
    for (const option of moveOptions) {
        const nextX = start[0] + option[0];
        const nextY = start[1] + option[1];

        if ((nextX === goal[0]) && (nextY === goal[1])) {
            return option;
        }
    }
}

const checkInput = (start, goal) => {
    if (!Array.isArray(start) || !Array.isArray(goal)) {
        throw new Error("Use input [x, y], [a, b]. The param type must be array.")
    }
    if (start.length !== 2 || goal.length !== 2) {
        throw new Error("Use input [x, y], [a, b]. Only 2 values per array.")
    }
}

console.log(knightMoves([3, 3], [4, 5]));