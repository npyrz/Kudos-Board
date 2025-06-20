import '/src/components/css/BoardInfo.css'
import Card from './Card'
import { useParams } from 'react-router'
import NewCard from './NewCard'

function BoardInfo( { board } ) {
    const { id } = useParams();
    console.log(id)
    console.log(board)

    const boardInfo = board.find((b) => b.id === parseInt(id));

    console.log(boardInfo.title)

    return (
    <div className='BoardInfo'>
        <h1>{boardInfo.title}</h1>
        <NewCard/>
        <Card/>
    </div>
    )
}

export default BoardInfo