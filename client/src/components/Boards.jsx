import '/src/components/css/Boards.css'
import { baseURL } from '../global';
import { useNavigate } from 'react-router';

function Board( { board, setBoard }) {
    const navigate = useNavigate();

    const handleView = (id) => {
        navigate(`/boards/${id}`)
    }

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
            <div className="boardCard" key={item.id}>
                <img src={`https://picsum.photos/200/300?random=${imageIndex}`} alt='boardImage' className='imgBoard'/>
                <h2>{item.title} </h2>
                <p>{item.category}</p>
                <div className='board-buttons'>
                    <button className='buttonBoard' onClick={() => handleView(item.id)}>View Board</button>
                    <button className='buttonBoard' onClick={() => handleDelete(item.id)}>Delete Board</button>
                </div>
            </div>
        ))}
    </div>
    )
}

export default Board