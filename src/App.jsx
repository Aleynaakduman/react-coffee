import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Urunler from './pages/ürünler'
import Urun1 from './buttons/urun'
function App() {


  return (
    <>
      <Router>

        <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ürünler' element={<Urunler />} />
           <Route path='/daha-fazlası' element={<Urunler />} />
           <Route path='/urun1' element={<Urun1/>} />

        </Routes>
          <Footer/>
      </Router>




    </>
  )
}

export default App
