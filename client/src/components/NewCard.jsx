import '/src/components/css/NewCard.css'
import { useState } from 'react'
import { baseURL } from '../global';

function NewCard( { boardId, populateCard }) {
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
        const description = event.target.description.value;
        const img = event.target.img.value;
        const owner = event.target.owner.value;
        const newCard = { title, description, img, owner};

        try {
            const response = await fetch(`${baseURL}/boards/${boardId}/cards`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCard),
            credentials: "include",
        });

        const data = await response.json();

        if (response.ok) {
            populateCard(data);
            handleClose();
        }
        } catch (err) {
        console.error("Network error. Please try again.", err);
        }
    };


    return (
    <div className='NewCard'>
        <button className='newCard-button' onClick={handleOpen}>Create a Card</button>
        {modalStatus && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <button className="exitButton" onClick={handleClose}><i className="fa fa-close"></i></button>
                        <h1>Create a New Card</h1>
                        <input className='card-input' name='title' required placeholder="Enter card title"/>
                        <input className='card-input' name='description' required placeholder="Enter card description"/>
                        <input className='card-input' name='search-img' placeholder="Search GIF..."/>
                        <div>
                            <button className="gifButton">Search</button>
                        </div>
                        <input className='card-input' name='img' required placeholder="Enter GIF URL"/>
                        <div>
                            <button className="gifButton">Copy GIF URL</button>
                        </div>
                        <input className='card-input' name='owner' placeholder="Enter owner (optional)"/>
                        <div className='buttonDiv'>
                        <button className='createButton'>Create Card</button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
    )
}

export default NewCard
