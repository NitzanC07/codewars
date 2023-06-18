/** Is the king in check?
 * 
 * Stage 1 - King and Rook
 * Write a function get 1 parameter - nested array that represent a chess 
 * board with position of one king and one rook. The function needs return 
 * a boolean value "True" if the king under a check, or "false" if not.
 */

const chessBoard = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "K", "R", "", ""],
    ["", "", "Q", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "B", "", "", "", "", ""],
];

function isCheck(chessBoard) {

    const positions = {
        king: [],
        queen:[],
        rook: [],
        bishop: []
    }

    // Check the king's position on the board.
    for (let row = 0; row < chessBoard.length; row++) {
        let i = chessBoard[row].findIndex(x => x === "K");
        if (i !== -1) {
            positions.king = [row, i]
        }
    }

    // Check the rook's position on the board.
    for (let row = 0; row < chessBoard.length; row++) {
        let i = chessBoard[row].findIndex(x => x === "R");
        if (i !== -1) {
            positions.rook = [...positions.rook, [row, i]]
        }
    }

    // Check the bishop's position on the board.
    for (let row = 0; row < chessBoard.length; row++) {
        let i = chessBoard[row].findIndex(x => x === "B");
        if (i !== -1) {
            positions.bishop = [...positions.bishop, [row, i]]
        }
    }

    // Check the queen's position on the board.
    for (let row = 0; row < chessBoard.length; row++) {
        let i = chessBoard[row].findIndex(x => x === "Q");
        if (i !== -1) {
            positions.queen = [...positions.queen, [row, i]]
        }
    }

    console.log(positions);

    // Check if the king and the rook locate on same row or same column.
    for (let x = 0; x < positions.rook.length; x++) {
        if (positions.rook[x][0] === positions.king[0] || positions.rook[x][1] === positions.king[1]) {
            return true;
        };
    }

    // Check if the king and the bishop locate on same cross.
    for (let x = 0; x < positions.bishop.length; x++) {
        if (
            positions.bishop[x][0] + positions.bishop[x][1] === positions.king[0] + positions.king[1] ||
            positions.bishop[x][0] - positions.bishop[x][1] === positions.king[0] - positions.king[1]
            ) {
            return true;
        };
    }

    // Check if the king and the queen locate on same cross, row or column.
    for (let x = 0; x < positions.queen.length; x++) {
        if (
            positions.queen[x][0] + positions.queen[x][1] === positions.king[0] + positions.king[1] ||
            positions.queen[x][0] - positions.queen[x][1] === positions.king[0] - positions.king[1] ||
            positions.queen[x][0] === positions.king[0] || 
            positions.queen[x][1] === positions.king[1]
            ) {
            return true;
        };
    }
    return false;
}

const result = isCheck(chessBoard);
console.log(result);
