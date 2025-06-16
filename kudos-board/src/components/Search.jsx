import './css/Search.css'

function Search() {

    return (
    <div className='Search'>
        <form className="search-form">
            <input className="search-input" type="text" name="board" placeholder="Search for boards..."/>
                <button className="search-button" type="submit">Search</button>
                <button className='search-button'>Clear</button>
        </form>
    </div>
    )
}

export default Search
