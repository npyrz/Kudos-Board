import '/src/components/css/BoardInfo.css'
import Card from './Card'
import { useParams } from 'react-router'
import NewCard from './NewCard'

function BoardInfo( { board } ) {
    const { id } = useParams();
    const boardInfo = board.find((b) => b.id === parseInt(id));

    return (
    <div className='BoardInfo'>
        <h1>{boardInfo.title}</h1>
        <NewCard boardId={boardInfo.id}/>
        <Card boardId={boardInfo.id}/>
    </div>
    )
}

export default BoardInfo