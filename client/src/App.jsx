import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Boards from './components/Boards'
import Footer from './components/Footer'

function App() {

  return (
    <div className='App'>
      <Banner/>
      <Navbar/>
      <Boards/>
      <Footer/>
    </div>
  )
}

export default App
