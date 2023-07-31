const game = (() => {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];

    const move = (index, symbol) => gameBoard[index] = symbol;

    return {gameBoard, move};
})();

//factory function for player characters
const   playerFactory = (name, symbol) => {
    const sayHi = () => console.log('Hi! my name is ' + name);
    return {name, symbol, sayHi}
}

const Cass = playerFactory('Cassidy', 'X');
const Alex = playerFactory('Alexandra', 'O');

