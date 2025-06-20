import '/src/components/css/Card.css'
import { useEffect, useState } from 'react'
import { baseURL } from '../global'

function Card({ boardId }) {
    const [cards, setCards] = useState([]);
    useEffect(() => {
    fetch(`${baseURL}/boards/${boardId}/cards`)
        .then(res => res.json())
        .then(data => setCards(data))
        .catch(err => console.log("Error fetching cards", err));
    }, [boardId]);
    return (
    <div className='CardList'>
        {cards.map(card => (
        <div className="Card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <img src="" alt={card.title} className=""/>
            <p>{card.owner}</p>
            <div className='cardButtons'>
                    <button className='buttonCard' >Upvote:</button>
                    <button className='buttonCard' >Delete Card</button>
            </div>
        </div>
        ))}
    </div>
    )};

export default Card;