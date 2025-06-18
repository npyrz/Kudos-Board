import './css/NewBoard.css'
import { useState } from 'react'

function NewBoard() {
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
            const response = await fetch(`http://localhost:3000/boards`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBoard),
            credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
            handleClose();
            //navigate('/');
            window.location.reload();
            console.log("test1")
        } else {
            console.error("Failed to add the board:", data.error);
            console.log('test2')
        }
        } catch (error) {
        console.error("Network error. Please try again.", error);
        console.log('test3')
        }
    };


    return (
    <div className='NewBoard'>
        <button className='newBoard-button' onClick={handleOpen}>Create New Board</button>
        {modalStatus && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <button className="exitButton" onClick={handleClose}><i className="fa fa-close"></i></button>
                        <h1>Create a New Board</h1>
                        <h3>Title:</h3>
                        <input className='board-input' name='title' required/>
                        <h3>Category:</h3>
                        <select id='selectTag' className='board-input' name='category' required defaultValue="">
                            <option value="">Select a category</option>
                            <option value='celebration'>Celebration</option>
                            <option value='thank-you'>Thank You</option>
                            <option value='inspiration'>Inspiration</option>
                        </select>
                        <h3>Author:</h3>
                        <input className='board-input' name='author'/>
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
