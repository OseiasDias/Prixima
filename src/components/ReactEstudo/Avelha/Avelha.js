import styles from './Avelha.module.css'
import { useState } from 'react'


function Quadro({ valor, clicar }) {
    return (
        <button className={styles.quadro} onClick={clicar}>{valor}</button>
    )
}



export default function Avelha() {

    const [xIsNext, setXSIsnext] = useState(true)
    const [square, setSquare] = useState(Array(9).fill(null))


    function handleClick(i) {

       

        if(square[i] || Vencedor(square))
            return

        const nextSquares = square.slice()

        if (xIsNext) {
            nextSquares[i] = "X"
        } else {
            nextSquares[i] = "0"
        }

        setSquare(nextSquares)
        setXSIsnext(!xIsNext)


    }


    let status


    const winner = Vencedor(square)

    status = "O Vencedor "+ winner

    if (winner){
        status = "O Vencedor "+ winner
    }else{
        status = "O Proximo Jogador"+  (xIsNext ? "X" : "O");
    }



    return (
        <div className={styles.corpo}>
           
           <p>{status}</p>
            <div className={styles.linhas}>
                <Quadro valor={square[0]} clicar={() => handleClick(0)} />
                <Quadro valor={square[1]} clicar={() => handleClick(1)} />
                <Quadro valor={square[2]} clicar={() => handleClick(2)} />
            </div>
            <div className={styles.linhas}>
                <Quadro valor={square[3]} clicar={() => handleClick(3)} />
                <Quadro valor={square[4]} clicar={() => handleClick(4)} />
                <Quadro valor={square[5]} clicar={() => handleClick(5)} />
            </div>
            <div className={styles.linhas}>
                <Quadro valor={square[6]} clicar={() => handleClick(6)} />
                <Quadro valor={square[7]} clicar={() => handleClick(7)} />
                <Quadro valor={square[8]} clicar={() => handleClick(8)} />
            </div>

        </div>
    )
}


function Vencedor(square) {


    const linhas = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]


    for (let i = 0; i < linhas.length; i++) {

        const [a, b, c] = linhas[i]

        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a]
        }

    }

    return null


}