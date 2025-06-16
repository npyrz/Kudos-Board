import './css/NewBoard.css'
import { useState } from 'react'

function NewBoard() {
    const [modalStatus, setModalStatus] = useState(false);

    // const handleOpen = () => {
    //     setModalStatus(true);
    // };

    // const handleClose = () => {
    //     setModalStatus(false);
    // };

    // if (!modalStatus) {
    //     handleClose()
    //     return null;
    // } else {
    //     handleOpen();
    // }


    return (
    <div className='NewBoard'>
        {/* <button className='newBoard-button'>Create New Board</button>
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="exitButton" onClick={handleClose}><i className="fa fa-close"></i></button>
                <h2>Title</h2>
                <input></input>
            </div>
        </div> */}
    </div>
    )
}

export default NewBoard
