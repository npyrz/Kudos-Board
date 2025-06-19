import '/src/components/css/Boards.css'
import BoardInfo from './BoardInfo'
import { baseURL } from '../global';

function Board( { board, setBoard }) {

    const handleDelete = async (boardId) => {
    try {
        const response = await fetch(`${baseURL}/boards/${boardId}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (response.ok) {
            setBoard(prev => prev.filter(prevBoard=> prevBoard.id !== boardId));
        } else {
            const data = await response.json();
            console.error("Failed to delete board:", data.error);
        }
    } catch (error) {
        console.error("Network error. Please try again.", error);
    }
    };

    return (
    <div className='Board'>
        {board.map((item, imageIndex) => (
            <div className="board-card" key={item.id}>
                <img src={`https://picsum.photos/200/300?random=${imageIndex}`} alt='boardImage' className='imgBoard'/>
                <h2>{item.title} </h2>
                <p>{item.author}</p>
        <div className='board-buttons'>
        <button className='buttonBoard'>View Board</button>
        <button className='buttonBoard' onClick={() => handleDelete(item.id)}>Delete Board</button>
        </div>
        <BoardInfo/>
        </div>
        ))}
    </div>
    )
}

export default Board