import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Boards from './components/Boards'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [board, setBoard] = useState([]);
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');

  // REGULAR FETCH CALL TO DISPLAY ALL BOARDS
  useEffect(() => {
      fetch('http://localhost:3000/boards')
      .then(response => response.json())
      .then((data) => {
        setBoard(data);
      })
  },[]);

  // FETCH CALL FOR DISPLAYING SEARCH QUERY'S
  useEffect(() => {
      if (query != '') {  
      fetch(`http://localhost:3000/boards?q=${query}`)
      .then(response => response.json())
      .then((data) => {
        setBoard(data);
      })
    }
  },[query]);

  // FETCH CALL FOR TAG TOGGLE DISPLAY
  useEffect(() => {
    if (tag != '') {  
    fetch(`http://localhost:3000/boards?c=${tag}`)
    .then(response => response.json())
    .then((data) => {
      setBoard(data);
    })
  }
  },[tag]);

  const handleBoardSearch = (query) => {
    setQuery(query);
  };

  const handleBoardTag = (tag) => {
    setTag(tag);
  }

  return (
    <div className='App'>
      <Banner/>
      <Navbar handleBoardSearch={handleBoardSearch} handleBoardTag={handleBoardTag}/>
      <Boards board={board} />
      <Footer/>
    </div>
  )
}

export default App
