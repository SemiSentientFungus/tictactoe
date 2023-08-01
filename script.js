const gameBoard = (() => {
    const board = new Array(9);

    const move = (index,symbol) => {
        grid.children[index].innerHTML = symbol;
    };

    return {board, move};
})();

const displayController = (() => {
    const log = (player) => console.log(`it is ${player.name}'s turn`);

    const turns = (player1, player2) => {
        let i = 0;
        let win = false;
        while (i < 9 && win == false){
            if (i%2 == 0){
                currentPlayer = player1;
            }
            else {
                currentPlayer = player2;
            }
            displayController.log(currentPlayer)
            i++;
        }
    };
    return {log, turns};
})();

//factory function for player characters
const   playerFactory = (name, symbol) => {
    //const playerMove = (index) => game.move(index, symbol);
    const playerMove = (index) => game.move(index, symbol)
    return {name, symbol, playerMove};
}

const Cass = playerFactory('Cassidy', 'X');
const Alex = playerFactory('Alexandra', 'O');

const grid = document.querySelector('.grid-container');
