import { useState } from "react"



function Square({ valorR, onSquareClick }) {

    return (<button className="square" onClick={onSquareClick}>
        {valorR}
    </button>)
}


function Broad() {

    const [xIsNext, setXSIsnext] = useState(true)
    const [squares, setSquare] = useState(Array(9).fill(null))

    function handleClick(i) {

        if (squares[i] || calculateWinner(squares))
           
            return


        const nextSquares = squares.slice();


        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquare(nextSquares)
        setXSIsnext(!xIsNext)
    }

    const winner = calculateWinner(squares)
    let status

    if (winner) {
        status = "o Vencedor e " + winner
    } else {
        status = "Proximo Jogador eh " + (xIsNext ? "X" : "O");
    }

    return (
       

        <div className="inicio">

            <p>{status}</p>

            <div className='linhaX'>
                <Square valorR={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square valorR={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square valorR={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>

            <div className='linhaX'>
                <Square valorR={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square valorR={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square valorR={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>

            <div className='linhaX'>
                <Square valorR={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square valorR={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square valorR={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>


        </div>
    )



}
export default Broad



function calculateWinner(square) {

    const lines = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let j = 0;j < lines.length; j++) {

        const [a, b, c] = lines[j]

        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a]
        }
    }

    return null;

}