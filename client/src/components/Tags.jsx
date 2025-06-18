import '/src/components/css/Tags.css'

function Tags( {handleBoardTag} ) {
    const handleTagChange = (event) => {
        console.log(event.target.value)
        if (handleBoardTag) {
            if (event.target.value === 'all') {
                console.log("test1")
            } else if (event.target.value === 'recent') {
                console.log("test2")
            } else {
                handleBoardTag(event.target.value);
            }
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