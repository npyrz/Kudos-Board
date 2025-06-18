import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Boards from './components/Boards'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [board, setBoard] = useState([]);
  const [query, setQuery] = useState('');

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


  const handleBoardSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className='App'>
      <Banner/>
      <Navbar handleBoardSearch={handleBoardSearch}/>
      <Boards board={board} />
      <Footer/>
    </div>
  )
}

export default App
