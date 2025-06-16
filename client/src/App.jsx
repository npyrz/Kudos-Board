import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import BoardList from './components/BoardList'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <Banner/>
      <Navbar/>
      <BoardList/>
      <Footer/>
    </div>
  )
}

export default App
