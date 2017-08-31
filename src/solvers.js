/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var x = 0;
  while (x < n){
    board.get(x)[x] = 1;
    x++;
  }
  var solution = [];
  for (var i = 0; i < n; i++){
    solution.push(board.get(i));
  }
  // return board;
  // var solution = []; //fixme
  // for ( var i = 0; i < n; i++) {
  //   var row = [];
  //   for ( var k = 0; k < n; k++) {
  //     if (i === k) {
  //       row.push(1);
  //     } else {
  //       row.push(0);
  //     }
  //   }
  //   solution.push(row);
  // }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board ({'n' : n});
  var x = 0;
  var y = 0;
  var recursive = function(x, y, rookCount) {
    if (rookCount === n) {
      solutionCount++;
      return;
    }

    while (x <= n && y < n){
      if (x === n){
        x = 0;
        y++;
      }
      if (y === n) { break; }
      board.get(y)[x] = 1;
      if (board.hasAnyRooksConflicts()){
        board.get(y)[x] = 0;
        x++;
      } else {
        recursive(x + 1, y, rookCount + 1);
        board.get(y)[x] = 0;
        x++;
      }
    }
  }
  recursive(x, y, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutionCount = 0;
  var board = new Board ({'n' : n});
  var solution = [];
  var x = 0;
  var y = 0;
  var recursive = function(x, y, queenCount) {
    if (solutionCount === 1) {
      return;
    }
    if (queenCount === n) {
      solutionCount++;
      for ( var i = 0; i < n; i++) {
        solution.push(board.get(i));
      }
      return;
    }

    while (x <= n && y < n){
      if (x === n ){
        x = 0;
        y++;
      }
      if (y === n) { break; }
      board.get(y)[x] = 1;
      if (board.hasAnyQueensConflicts()){
        board.get(y)[x] = 0;
        x++;
      } else if (!board.hasAnyQueensConflicts()){
        recursive(x + 1, y, queenCount + 1);
        if (solutionCount === 1) {
          return solution;
        }
        board.get(y)[x] = 0;
        x++;
      }
    }
  }
  recursive(x, y, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board ({'n' : n});
  var x = 0;
  var y = 0;
  var recursive = function(x, y, queenCount) {
    if (queenCount === n) {
      solutionCount++;
      return;
    }

    while (x <= n && y < n){
      if (x === n ){
        x = 0;
        y++;
      }
      if (y === n) { break; }
      board.get(y)[x] = 1;
      if (board.hasAnyQueensConflicts()){
        board.get(y)[x] = 0;
        x++;
      } else if (!board.hasAnyQueensConflicts()){
        recursive(x + 1, y, queenCount + 1);
        board.get(y)[x] = 0;
        x++;
      }
    }
  }
  recursive(x, y, 0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
