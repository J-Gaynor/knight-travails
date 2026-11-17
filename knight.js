// Knight can move +-1, 2 or +-2, 1.
// Can never go out of bounds (<0, >7)
// search depth to uncover shortest path

const knightMoves = (start, goal) => {
    checkInput(start, goal);
    const moveOptions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]
    for (const option of moveOptions) {
        if (checkMove(start, option) !== undefined) {
            const { nextX, nextY } = checkMove(start, option)
            if ((nextX === goal[0]) && (nextY === goal[1])) {
                return option;
            }
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
    if ((start[0] < 0 || start[0] > 7) || (start[1] < 0 || start[1] > 7)) {
        throw new Error("Use input [x, y], [a, b]. Values must be between 0 and 7.")
    }
    if ((goal[0] < 0 || goal[0] > 7) || (goal[1] < 0 || goal[1] > 7)) {
        throw new Error("Use input [x, y], [a, b]. Values must be between 0 and 7.")
    }
}

const checkMove = (start, move) => {
    const nextX = start[0] + move[0];
    const nextY = start[1] + move[1];
    if (nextX >= 0 && nextX <= 7 && nextY >= 0 && nextY <= 7) {
        return { nextX, nextY };
    }
    return;
}

console.log(knightMoves([7, 7], [5, 6]));