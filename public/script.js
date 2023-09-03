let currentPlayer = 'X';
let isGameActive = true;

function makeMove(button) {
    if (isGameActive && button.value === '') {
            button.value = currentPlayer;
                    button.disabled = true;
                            button.textContent = currentPlayer;
                                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                            updateResult();
                                                }
                                                }

                                                function updateResult() {
                                                    const resultContainer = document.getElementById('result');
                                                        const winner = checkWinner();

                                                            if (winner) {
                                                                    resultContainer.textContent = `Player ${winner} wins!`;
                                                                            isGameActive = false;
                                                                                } else if ([...document.querySelectorAll('.btn')].every(button => button.value !== '')) {
                                                                                        resultContainer.textContent = "It's a draw!";
                                                                                                isGameActive = false;
                                                                                                    } else {
                                                                                                            resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
                                                                                                                }
                                                                                                                }

                                                                                                                function checkWinner() {
                                                                                                                    const winningCombinations = [
                                                                                                                            [0, 1, 2],
                                                                                                                                    [3, 4, 5],
                                                                                                                                            [6, 7, 8],
                                                                                                                                                    [0, 3, 6],
                                                                                                                                                            [1, 4, 7],
                                                                                                                                                                    [2, 5, 8],
                                                                                                                                                                            [0, 4, 8],
                                                                                                                                                                                    [2, 4, 6],
                                                                                                                                                                                        ];

                                                                                                                                                                                            for (const combination of winningCombinations) {
                                                                                                                                                                                                    const [a, b, c] = combination;
                                                                                                                                                                                                            if (document.querySelector(`.btn[value="${a}"]`).value &&
                                                                                                                                                                                                                        document.querySelector(`.btn[value="${a}"]`).value === document.querySelector(`.btn[value="${b}"]`).value &&
                                                                                                                                                                                                                                    document.querySelector(`.btn[value="${a}"]`).value === document.querySelector(`.btn[value="${c}"]`).value) {
                                                                                                                                                                                                                                                return document.querySelector(`.btn[value="${a}"]`).value;
                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                return null;
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                function resetGame() {
                                                                                                                                                                                                                                                                    const buttons = document.querySelectorAll('.btn');
                                                                                                                                                                                                                                                                        buttons.forEach(button => {
                                                                                                                                                                                                                                                                                button.value = '';
                                                                                                                                                                                                                                                                                        button.disabled = false;
                                                                                                                                                                                                                                                                                                button.textContent = '';
                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                        currentPlayer = 'X';
                                                                                                                                                                                                                                                                                                            isGameActive = true;
                                                                                                                                                                                                                                                                                                                document.getElementById('result').textContent = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                document.getElementById('reset-button').addEventListener('click', resetGame);
                                                                                                                                                                                                                                                                                                                