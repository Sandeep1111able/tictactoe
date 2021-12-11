const player = (name, sign, isTurn) => {
    return {
        name,
        sign,
        isTurn,
    }
};




const gameBoard = (function() {
    let gameBoardGrid = ['', '', '', '', '', '', '', '', ''];
    const cells = Array.from(document.querySelectorAll('.cell'));
    const gridContainer = document.querySelector('.gameboard')
    const rstBtn = document.querySelector('.reset-button');

    cells.forEach((cell, index) => {
        cell.addEventListener('click', (e) => {
            game.checkBoxes(gameBoardGrid, index, e);
        });
    });


    rstBtn.addEventListener('click', () => {

        gameBoardGrid.forEach((ele, index) => gameBoardGrid[index] = '');
        cells.forEach(cell => {
            cell.textContent = '';
            console.log(cell.textContent);
            console.log(gameBoardGrid);
        });
        game.resetPlayer();
        game.resetWinner();

        gridContainer.style.pointerEvents = 'auto';
    });



    return {

        gridContainer,
    }


})();



const game = (function() {
    const playerOne = player("Sandeep", "X", true);
    const playerTwo = player("Subedi", "0", false);
    let activePlayer = playerOne;
    const span = document.querySelector('span');



    const checkBoxes = (board, index, e) => {
        if (board[index] === '') {
            board[index] = activePlayer.sign;
            e.target.textContent = activePlayer.sign;
            if (checkWinner(board)) {
                span.textContent = `${activePlayer.sign} Wins The Game`;
                gameBoard.gridContainer.style.pointerEvents = 'none';

            } else if (board.every(ele => ele !== "")) {
                span.textContent = `It's a tie`;
            }

            nextPlayer();
        } else {

            return;
        }


    }

    const resetPlayer = () => {
        activePlayer = playerOne;
    }

    const resetWinner = () => {
        span.textContent = '';
    }

    const nextPlayer = () => {
        if (activePlayer.isTurn) {
            activePlayer = playerTwo;

        } else {
            activePlayer = playerOne;
        }

    }


    const checkWinner = (board) => {

        if (board[0] == activePlayer.sign && board[1] == activePlayer.sign && board[2] == activePlayer.sign ||
            board[3] == activePlayer.sign && board[4] == activePlayer.sign && board[5] == activePlayer.sign ||
            board[6] == activePlayer.sign && board[7] == activePlayer.sign && board[8] == activePlayer.sign ||
            board[0] == activePlayer.sign && board[3] == activePlayer.sign && board[6] == activePlayer.sign ||
            board[1] == activePlayer.sign && board[4] == activePlayer.sign && board[7] == activePlayer.sign ||
            board[2] == activePlayer.sign && board[5] == activePlayer.sign && board[8] == activePlayer.sign ||
            board[0] == activePlayer.sign && board[4] == activePlayer.sign && board[8] == activePlayer.sign ||
            board[2] == activePlayer.sign && board[4] == activePlayer.sign && board[6] == activePlayer.sign) {
            return true;
        } else {
            return;
        }





    }

    return {
        checkBoxes,
        resetPlayer,
        resetWinner,
    }
})();