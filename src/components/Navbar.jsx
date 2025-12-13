import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar' >
      <div className="left-side">
          <img className='logo-img' src={Logo}/>
      </div>


    <div className="center">
      <Link to="/Home" >Anasayfa</Link>
      <Link to="/Ürünler" >Ürünlerimiz</Link>
      <Link to="/Hakkımızda" >Hakkımızda</Link>
      <Link to="/İletişim" >İletişim</Link>
      
    </div>

      <div className="right-side">
     <button className='btn1' >Giriş Yap</button>
     <button className='btn2' >Kayıt ol</button>
      


      </div>
    </div>
  )
}

export default Navbar