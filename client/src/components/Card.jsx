import '/src/components/css/Card.css'
import { baseURL } from '../global';

function Card({ cards, setCards }) {

    const handleDelete = async (cardId) => {
        try {
            const response = await fetch(`${baseURL}/cards/${cardId}`, {
                method: "DELETE",
                credentials: "include",
            });
            if (response.ok) {
                setCards(cards.filter(card => card.id !== cardId));
            } else {
                const data = await response.json();
                console.error("Failed to delete card:", data.error);
            }
            } catch (error) {
                onsole.error("Network error. Please try again.", error);
            }
};

const handleUpvote = async (cardId) => {
    try {
        const response = await fetch(`${baseURL}/cards/${cardId}/upvote`, {
                method: "PUT",
                headers: { "Content-Type": 'application/json'}
            });

            if (response.ok) {
                const updatedCard = await response.json();
                setCards(prevCards => prevCards.map(card => card.id === cardId ? updatedCard : card));
            } else {
                const data = await response.json();
                console.error("Failed to upvote card:", data.error);
            }
        } catch (error) {
            console.error("Network error. Please try again.", error);
    }
}


    return (
    <div className='CardList'>
        {cards.map(card => (
        <div className="Card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <img alt={card.title} className="imgCard" src={card.img}/>
            <p>{card.owner}</p>
            <div className='cardButtons'>
                    <button className='buttonCard' onClick={() => handleUpvote(card.id)}>Upvote: {card.upvote}</button>
                    <button className='buttonCard' onClick={() => handleDelete(card.id)}>Delete Card</button>
            </div>
        </div>
        ))}
    </div>
    )};

export default Card;