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
        <button className='tag-button' value="all" name="all" onClick={handleTagChange}>All</button>
        <button className='tag-button' value="recent" name='recent' onClick={handleTagChange}>Recent</button>
        <button className='tag-button' value='celebration' name='celebration' onClick={handleTagChange}>Celebration</button>
        <button className='tag-button' value='thank-you' name='thank-you' onClick={handleTagChange}>Thank You</button>
        <button className='tag-button' value='inspiration' name='inspiration' onClick={handleTagChange}>Inspiration</button>
    </div>
    )
}

export default Tags