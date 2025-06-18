import './css/Boards.css'
import BoardInfo from './BoardInfo'
import { useState, useEffect } from 'react'

function Board() {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/boards')
        .then(response => response.json())
        .then((data) => {
        setBoard(data);
        })
    },[]);

    return (
    <div className='Board'>
        {board.map((item, imageIndex) => (
            <div className="board-card">
                <img src={`https://picsum.photos/200/300?random=${imageIndex}`} alt='boardImage' className='imgBoard'/>
                <h2>{item.title} </h2>
                <p>{item.author}</p>
        <div className='board-buttons'>
        <button className='buttonBoard'>View Board</button>
        <button className='buttonBoard'>Delete Board</button>
        </div>
        <BoardInfo/>
        </div>
        ))}
    </div>
    )
}

export default Board