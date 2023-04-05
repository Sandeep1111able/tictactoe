const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    const grid = document.querySelectorAll(".grid-box");
    grid.forEach((box) => {
      box.addEventListener("click", (event) => {
        game.handleClick(event);
        event.target.textContent = board[event.target.id];
      });
    });
  };

  const update = (index, value) => {
    board[index] = value;
  };

  return { render, update };
})();

const Player = (name, marker) => {
  return { name, marker };
};

const game = (() => {
  let player = [Player("Sandeep", "X"), Player("Hem", "0")];
  let currentPlayerIndex = 0;

  const handleClick = (event) => {
    let index = +event.target.id;
    gameBoard.update(index, player[currentPlayerIndex].marker);
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  };

  return {
    handleClick,
  };
})();

gameBoard.render();
