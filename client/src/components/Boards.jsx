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

    const handleDelete = async (petId) => {
    try {
        const response = await fetch(`http://localhost:3000/boards/${petId}`, {
            method: "DELETE",
            credentials: "include", // Include credentials
        });

        if (response.ok) {
            console.log("Pet deleted successfully");
            //navigate('/'); // Navigate to the home page
            window.location.reload(); // Reload the homepage
        } else {
            const data = await response.json();
            console.error("Failed to delete pet:", data.error);
        }
    } catch (error) {
        console.error("Network error. Please try again.", error);
    }
    };

    return (
    <div className='Board'>
        {board.map((item, imageIndex) => (
            <div className="board-card">
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