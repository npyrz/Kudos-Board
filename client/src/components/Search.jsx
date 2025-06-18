import './css/Search.css'

function Search( {handleBoardSearch} ) {
    const handleForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const boardName = formData.get('board')
        handleBoardSearch(boardName)
        event.target.reset();
    }

    return (
    <div className='Search'>
        <form className="search-form" onSubmit={handleForm}>
            <input className="search-input" type="text" name="board" placeholder="Search for boards..."/>
                <button className="search-button" type="submit">Search</button>
                <button className='search-button'>Clear</button>
        </form>
    </div>
    )
}

export default Search
