import '/src/components/css/Search.css'

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
        <form className="searchForm" onSubmit={handleForm}>
            <input className="searchInput" type="text" name="board" placeholder="Search for boards..." onChange={(e) => handleBoardSearch(e.target.value)}/>
                <button className="searchButton" type="submit">Search</button>
                <button className='searchButton' type='button' onClick={() => handleBoardSearch('')}>Clear</button>
        </form>
    </div>
    )
}

export default Search
