import './css/Board.css'
import BoardInfo from './BoardInfo'

function Board() {

    return (
    <div className='Board'>
        <img src='https://picsum.photos/200/300?random=99' alt='boardImage' className='imgBoard'/>
        <h2>Title</h2>
        <p>Description</p>
        <div className='board-buttons'>
        <button className='buttonBoard'>View Board</button>
        <button className='buttonBoard'>Delete Board</button>
        </div>
        <BoardInfo/>
    </div>
    )
}

export default Board


// IMG | TITLE | DESCRIPTION | VIEW BOARD | DELETE BOARD|