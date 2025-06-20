import '/src/components/css/NewBoard.css'
import { useState } from 'react'
import { baseURL } from '../global';

function NewBoard( { setBoard, board }) {
    const [modalStatus, setModalStatus] = useState(false);

    const handleOpen = () => {
        setModalStatus(true);
    };

    const handleClose = () => {
        setModalStatus(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const category = event.target.category.value;
        const author = event.target.author.value;
        const newBoard = { title, category, author};

        try {
            const response = await fetch(`${baseURL}/boards`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBoard),
            credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
            setBoard([...board, data]);
            handleClose();
        }
        } catch (error) {
        console.error("Network error. Please try again.", error);
        }
    };


    return (
    <div className='NewBoard'>
        <button className='newBoardButton' onClick={handleOpen}>Create New Board</button>
        {modalStatus && (
            <div className="modalOverlay">
                <div className="modalContent">
                    <form onSubmit={handleSubmit}>
                        <button className="exitButton" onClick={handleClose}><i className="fa fa-close"></i></button>
                        <h1>Create a New Board</h1>
                        <h3>Title:</h3>
                        <input className='boardInput' name='title' required/>
                        <h3>Category:</h3>
                        <select id='selectTag' className='boardInput' name='category' required defaultValue="">
                            <option value="">Select a category</option>
                            <option value='Celebration'>Celebration</option>
                            <option value='Thank You'>Thank You</option>
                            <option value='Inspiration'>Inspiration</option>
                        </select>
                        <h3>Author:</h3>
                        <input className='boardInput' name='author'/>
                        <div className='buttonDiv'>
                            <button className='createButton'>Create Board</button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
    )
}

export default NewBoard
