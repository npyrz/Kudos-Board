import './css/NavBar.css'
import Search from './Search'
import Tags from './Tags'
import NewBoard from './NewBoard'

function Navbar() {

    return (
    <div className='Navbar'>
        <Search/>
        <Tags/>
        <NewBoard/>
    </div>
    )
}

export default Navbar
