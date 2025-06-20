import Search from './Search'
import Tags from './Tags'
import NewBoard from './NewBoard'

function Navbar( {handleBoardSearch, handleBoardTag, setBoard, board }) {

    return (
    <div className='Navbar'>
        <Search handleBoardSearch={handleBoardSearch}/>
        <Tags handleBoardTag={handleBoardTag}/>
        <NewBoard setBoard={setBoard} board={board}/>
    </div>
    )
}

export default Navbar
