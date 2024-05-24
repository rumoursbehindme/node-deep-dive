function is_attacked(x, y, board, N) {
    if (N === 0) {
        return false
    }
    // Check row
    for (let i = 0; i < N; i++) {
        if (board[x][i] === 1) return true;
    }

    // Check column
    for (let i = 0; i < N; i++) {
        if (board[i][y] === 1) return true;
    }

    // Check diagonals
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 1 && (i + j === x + y || i - j === x - y)) {
                return true;
            }
        }
    }

    return false;
}

function NQueens(board, N) {
    if (N === 0) return true; // All queens have been placed

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (is_attacked(i, j, board, board.length)) continue;

            board[i][j] = 1; // Place current queen at cell (i, j)

            if (NQueens(board, N - 1)) return true; // Solve subproblem

            board[i][j] = 0; // Remove current queen from (i, j)
        }
    }

    return false;
}

// Utility function to create an NxN board
function createBoard(N) {
    let board = [];
    for (let i = 0; i < N; i++) {
        board.push(new Array(N).fill(0));
    }
    return board;
}

// Example usage
let N = 4 // Change N to your desired board size
let board = createBoard(N);
if (NQueens(board, N)) {
    console.log("Solution found:");
    console.log(board);
} else {
    console.log("No solution exists.");
}
