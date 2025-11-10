// quetion first print permutaion

function printPermutation(str,prem,index){
    if(str.length === 0){
        console.log(prem)
        return
    }

    for(let i = 0 ; i < str.length; i++){
        let current = str.charAt(i)
        let newString = str.substring(0,i) + str.substring(i + 1)

        printPermutation(newString,prem + current , index + 1)
    }
}


// printPermutation("abc")



//  N-Queens

// solution first way 
function solveNQueens(n) {
    const solutions = [];
    const board = Array(n).fill(null).map(() => Array(n).fill('.'));

    // Helper sets to efficiently check for conflicts
    const cols = new Set();
    const posDiag = new Set(); // r + c
    const negDiag = new Set(); // r - c

    function backtrack(row) {
        // Base case: All queens placed
        if (row === n) {
            solutions.push(board.map(r => r.join(''))); // Store the solution
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check if it's safe to place a queen at (row, col)
            if (!cols.has(col) && !posDiag.has(row + col) && !negDiag.has(row - col)) {
                // Place the queen
                board[row][col] = 'Q';
                cols.add(col);
                posDiag.add(row + col);
                negDiag.add(row - col);

                // Recurse to the next row
                backtrack(row + 1);

                // Backtrack: Remove the queen and reset sets
                board[row][col] = '.';
                cols.delete(col);
                posDiag.delete(row + col);
                negDiag.delete(row - col);
            }
        }
    }

    backtrack(0); // Start placing queens from row 0
    return solutions;
}

// Example usage:
// const n2 = 4;
// const result5 = solveNQueens(n2);
// console.log(`Solutions for N=${n} Queens:`);
// result5.forEach(solution => {
//     solution.forEach(row => console.log(row));
//     console.log('---');
// });




// solution second way
/**
 * Solve N-Queens using backtracking + recursion.
 * Returns an array of solutions; each solution is an array of strings.
 *
 * Example: solveNQueens(4) ->
 * [
 *  [".Q..","...Q","Q...","..Q."],
 *  ["..Q.","Q...","...Q",".Q.."]
 * ]
 */

function solveNQueens(n) {
  const solutions = [];
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  // Track columns and diagonals for O(1) checks
  const cols = Array(n).fill(false);             // column occupied
  const diag1 = Array(2 * n - 1).fill(false);   // r - c + (n-1)
  const diag2 = Array(2 * n - 1).fill(false);   // r + c

  function placeQueen(row) {
    if (row === n) {
      // Found a valid placement; convert board rows to strings
      solutions.push(board.map(r => r.join('')));
      return;
    }

    for (let col = 0; col < n; col++) {
      const d1 = row - col + (n - 1);
      const d2 = row + col;

      if (cols[col] || diag1[d1] || diag2[d2]) continue; // can't place here

      // place
      board[row][col] = 'Q';
      cols[col] = diag1[d1] = diag2[d2] = true;

      // recurse to next row
      placeQueen(row + 1);

      // backtrack
      board[row][col] = '.';
      cols[col] = diag1[d1] = diag2[d2] = false;
    }
  }

  placeQueen(0);
  return solutions;
}

// Demo / quick test
// console.log('N=4 solutions:', solveNQueens(4));
// console.log('Count for N=8:', solveNQueens(8).length);





/**
 * Sudoku Solver using Backtracking + Recursion
 * Board is a 9x9 grid with digits '1'-'9' and '.' for empty cells.
 * Example call: solveSudoku(board);
 */

function solveSudoku(board) {
  const N = 9;

  function isValid(row, col, char) {
    for (let i = 0; i < N; i++) {
      // check row
      if (board[row][i] === char) return false;
      // check col
      if (board[i][col] === char) return false;
      // check 3x3 box
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (board[boxRow][boxCol] === char) return false;
    }
    return true;
  }

  function backtrack() {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (board[row][col] === ".") {
          for (let num = 1; num <= 9; num++) {
            const char = String(num);
            if (isValid(row, col, char)) {
              board[row][col] = char;

              if (backtrack()) return true; // solved

              board[row][col] = "."; // backtrack
            }
          }
          return false; // no valid num found → dead end
        }
      }
    }
    return true; // board filled
  }

  backtrack();
  return board;
}

// Example Sudoku
let sudoku = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

console.log("Before:");
console.log(sudoku.map(r => r.join(" ")).join("\n"));

solveSudoku(sudoku);

console.log("\nSolved:");
console.log(sudoku.map(r => r.join(" ")).join("\n"));





