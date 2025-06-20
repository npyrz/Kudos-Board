import '/src/components/css/NewCard.css'
import { useState } from 'react'
import { baseURL} from '../global';
import axios from 'axios';

function NewCard( { boardId, populateCard }) {
    const [modalStatus, setModalStatus] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [gifs, setGifs] = useState([]);
    const [selectedGif, setSelectedGif] = useState('');
    const key = import.meta.env.VITE_API_KEY;


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
        const img = selectedGif;
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

    const getGif = async () => {
        try {
            const response = await axios.get(`https://api.giphy.com/v1/gifs/search?`, {
                params: {
                    api_key: key,
                    q: searchTerm,
                    limit: 6
                }
            });
            const data = response.data.data;
            setGifs(data);
        } catch (err) {
        console.error("Network error. Please try again.", err);
        }
    };

    const handleGifSelect = (gifUrl) => {
        setSelectedGif(gifUrl);
    };

    const searchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
    <div className='NewCard'>
    <button className='newCardButton' onClick={handleOpen}>Create a Card</button>
    {modalStatus && (
        <div className="modalOverlay">
            <div className="modalContent">
                <form onSubmit={handleSubmit}>
                    <button className="exitButton" onClick={handleClose}><i className="fa fa-close"></i></button>
                    <h1>Create a New Card</h1>
                    <input className='cardInput' name='title' required placeholder="Enter card title"/>
                    <input className='cardInput' name='description' required placeholder="Enter card description" />
                    <input className='cardInput' name='search-img' value={searchTerm} onChange={searchChange} placeholder="Search GIF..."/>
                    <div className="showGif">
                        {gifs.map((gif) => (
                            <img 
                                key={gif.id} 
                                src={gif.images.original.url} 
                                alt={gif.title} 
                                onClick={() => handleGifSelect(gif.images.original.url)}
                                style={{ width: '150px', height: '150px' }}
                            />
                        ))}
                    </div>
                    <div>
                        <button className="gifButton" onClick={getGif} type='button'>Search</button>
                    </div>
                    <input className='cardInput' name='img' value={selectedGif} placeholder="GIF URL"/>
                    <input className='cardInput' name='owner' placeholder="Enter owner (optional)" />
                    <div className='buttonDiv'>
                        <button className='createButton'>Create Card</button>
                    </div>
                </form>
            </div>
        </div>
    )}
</div>
)};

export default NewCard