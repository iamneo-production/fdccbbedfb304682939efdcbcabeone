// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
function ticTacToe(btn, i) {
        if (cells[i] === '' && !checkWin()) {
                cells[i] = currentPlayer;
                        btn.textContent = currentPlayer;
                                
                                        const winner = checkWin();
                                                if (winner) {
                                                            result.textContent = `Player ${winner} wins!`;
                                                                    } else {
                                                                                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                                                                        }
                                                                                            }
                                                                                            }

                                                                                            // Function to reset the game
                                                                                            function resetGame() {
                                                                                                cells = ['', '', '', '', '', '', '', '', ''];
                                                                                                    currentPlayer = 'X';
                                                                                                        result.textContent = '';
                                                                                                            btns.forEach((btn) => {
                                                                                                                    btn.textContent = '';
                                                                                                                        });
                                                                                                                        }

                                                                                                                        // Add event listeners to buttons
                                                                                                                        btns.forEach((btn, i) => {
                                                                                                                            btn.addEventListener('click', () =>
}