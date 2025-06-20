import '/src/components/css/BoardInfo.css'
import Card from './Card'
import { useEffect} from 'react'
import { useParams } from 'react-router'
import { baseURL } from '../global'

function BoardInfo() {
    const { id } = useParams();
    useEffect(() => {
        fetch(`${baseURL}/boards/${id}`)
        .then(res => res.json())
        .then(data => setBoard(data))
        .catch(err => console.error("Error fetching board:", err))
    }, [id]);

    return (
    <div className='BoardInfo'>
        <button>Create Card</button>
        <Card/>
    </div>
    )
}

export default BoardInfo
