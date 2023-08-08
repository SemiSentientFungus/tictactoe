let turn = 0;

const gameBoard = (() => {
    const board = new Array(9);
    return {board, turn};
})();

const displayController = (() => {
    const takeTurn = () => turn++;
    const player = (player1, player2) => {
        if (turn%2 == 0){
            return player1
        }
        else {
            return player2
        }
    };

    return {takeTurn, player}
})();

//factory function for player characters
const   playerFactory = (name, symbol) => {
    return {name, symbol};
}

const Cass = playerFactory('Cassidy', 'X');
const Alex = playerFactory('Alexandra', 'O');

const grid = document.querySelector('.grid-container');
const childArray = grid.children;
for (index of childArray) {
    index.addEventListener('click', () => index.innerHTML = "clicked")
}