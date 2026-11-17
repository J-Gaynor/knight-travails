// Knight can move +-1, 2 or +-2, 1.
// Can never go out of bounds (<0, >7)
// search bredth to uncover shortest path

const moveOptions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]]

const knightMoves = (start, goal) => {
    checkInput(start, goal);
    const queue = [[start]];
    const visited = new Set();
    visited.add(`${start[0]}, ${start[1]}`);

    while (queue.length > 0) {
        const currentPath = queue.shift();
        const currentPosition = currentPath[currentPath.length - 1];

        if (currentPosition[0] === goal[0] && currentPosition[1] === goal[1]) {
            console.log(`You made it in ${currentPath.length - 1} moves!  Here's your path:`);
            currentPath.forEach(pos => console.log(pos));
            return currentPath;
        }

        for (const option of moveOptions) {
            const moveResult = checkMove(currentPosition, option);

            if (moveResult !== undefined) {
                const { nextX, nextY } = moveResult;
                const key = `${nextX}, ${nextY}`;

                if (!visited.has(key)) {
                    visited.add(key);
                    queue.push([...currentPath, [nextX, nextY]]);
                }
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

knightMoves([0, 0], [5, 6]);