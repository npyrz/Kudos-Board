import './css/NavBar.css'
import Search from './Search'
import Tags from './Tags'
import NewBoard from './NewBoard'

function Navbar( {handleBoardSearch, handleBoardTag }) {

    return (
    <div className='Navbar'>
        <Search handleBoardSearch={handleBoardSearch}/>
        <Tags handleBoardTag={handleBoardTag}/>
        <NewBoard/>
    </div>
    )
}

export default Navbar
