import './css/NavBar.css'
import Search from './Search'
import Tags from './Tags'
import NewBoard from './NewBoard'

function Navbar( {handleBoardSearch }) {

    return (
    <div className='Navbar'>
        <Search handleBoardSearch={handleBoardSearch}/>
        <Tags/>
        <NewBoard/>
    </div>
    )
}

export default Navbar
