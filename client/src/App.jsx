import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Boards from './components/Boards'
import Footer from './components/Footer'
import BoardInfo from './components/BoardInfo'
import { useEffect, useState } from 'react'
import { baseURL } from './global'
import { Routes, Route, BrowserRouter } from 'react-router';

function App() {
  const [board, setBoard] = useState([]);
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');

  // REGULAR FETCH CALL TO DISPLAY ALL BOARDS
  useEffect(() => {
      fetch(`${baseURL}/boards`)
      .then(response => response.json())
      .then((data) => {
        setBoard(data);
      })
  },[]);

  // FETCH CALL FOR DISPLAYING SEARCH QUERY'S
  useEffect(() => {
    const url = query !== '' ? `${baseURL}/boards?q=${query}` : `${baseURL}/boards`;
      fetch(url)
      .then(response => response.json())
      .then((data) => {
        setBoard(data);
      })
  },[query]);

  // FETCH CALL FOR TAG TOGGLE DISPLAY
  useEffect(() => {
    let fetchUrl = `${baseURL}/boards`;
    if (tag && tag != 'all') {
      fetchUrl += `?c=${tag}`
    }

    fetch(fetchUrl)
    .then(response => response.json())
    .then((data) => {
      setBoard(data);
    })

  },[tag]);

  const handleBoardSearch = (query) => {
    setQuery(query);
  };

  const handleBoardTag = (tag) => {
    setTag(tag);
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Banner/>
              <Navbar handleBoardSearch={handleBoardSearch} handleBoardTag={handleBoardTag} setBoard={setBoard} board={board}/>
              <Boards board={board} setBoard={setBoard}/>
              <Footer/>
            </>
          }/>
          <Route path="/boards/:id" element={
            <>
              <Banner/>
              <BoardInfo board={board}/>
              <Footer/>
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
