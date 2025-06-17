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


    return (
    <div className='NewBoard'>
        <button className='newBoard-button' onClick={handleOpen}>Create New Board</button>
        {modalStatus && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="exitButton" onClick={handleClose}><i className="fa fa-close"></i></button>
                    <h1>Create a New Board</h1>
                    <h3>Title:</h3>
                    <input className='board-input'/>
                    <h3>Category:</h3>
                    <form>
                            <select id='selectTag' className='board-input'>
                            <option value='celebration'>Select a category</option>
                            <option value='celebration'>Celebration</option>
                            <option value='thank-you'>Thank You</option>
                            <option value='inspiration'>Inspiration</option>
                        </select>   
                    </form>
                    <h3>Author:</h3>
                    <input className='board-input'/>
                    <div className='buttonDiv'>
                        <button className='createButton'>Create Board</button>
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default NewBoard
