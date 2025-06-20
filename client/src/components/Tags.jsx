import '/src/components/css/Tags.css'

function Tags( {handleBoardTag} ) {
    const handleTagChange = (event) => {
        console.log(event.target.value)
        const value = event.target.value;
        if (handleBoardTag) {
            handleBoardTag(value);
        }
    }

    return (
    <div className='Tags'>
        <button className='tag-button' value="all" onClick={handleTagChange}>All</button>
        <button className='tag-button' value="recent" onClick={handleTagChange}>Recent</button>
        <button className='tag-button' value='Celebration' onClick={handleTagChange}>Celebration</button>
        <button className='tag-button' value='Thank You' onClick={handleTagChange}>Thank You</button>
        <button className='tag-button' value='Inspiration' onClick={handleTagChange}>Inspiration</button>
    </div>
    )
}

export default Tags