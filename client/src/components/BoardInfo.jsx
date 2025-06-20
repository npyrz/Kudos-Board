import '/src/components/css/BoardInfo.css'
import Card from './Card'
import { useParams, useNavigate } from 'react-router'
import NewCard from './NewCard'
import { useState, useEffect } from 'react'
import { baseURL } from '../global'

function BoardInfo( { board } ) {
    const { id } = useParams();
    const boardInfo = board.find((b) => b.id === parseInt(id));
    const [cards, setCards] = useState([]);
    const naviagate = useNavigate();

    useEffect(() => {
    fetch(`${baseURL}/boards/${id}/cards`)
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(err => console.log("Error fetching cards", err));
    }, [id]);

    const populateCard = (newCard) => {
        setCards((prevCards) => [...prevCards, newCard]);
    }

    return (
    <div className='BoardInfo'>
        <button className="backButton" onClick={() => naviagate('/')}><i className="fa fa-arrow-left"></i></button>
        <h1>{boardInfo.title}</h1>
        <NewCard boardId={boardInfo.id} populateCard={populateCard}/>
        <Card cards={cards} setCards={setCards}/>
    </div>
    )
}

export default BoardInfo