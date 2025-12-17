import React, { useState } from 'react'
import './urun1.css'
import Paket1 from '../assets/paket1.png'
import Paket2 from '../assets/paket2.png'
import Paket3 from '../assets/paket3.png'

function Urun1() {

  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)

  return (
    <div className="urun1">
      
      <div
        className="card1"
        onMouseEnter={() => setHover1(true)}
        onMouseLeave={() => setHover1(false)}
      >
        <img
          className="imgg"
          src={hover1 ? Paket3 : Paket1}
          alt="Türk Kahvesi"
        />

        <p className='p1'>Türk Kahvesi 500 Gr</p>
        <p className='p2'>₺ 530.00</p>
        <button className='sepet'>Sepete Ekle</button>
      </div>

      <div className="card2"
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <img className='imgg' src={ hover2 ? Paket3:Paket2} />
        <p className='p1'>Türk Kahvesi 500 Gr 2'li Paket</p>
        <p className='p2'>₺ 1,050.50</p>
        <button className='sepet'>Sepete Ekle</button>
      </div>

    </div>
  )
}

export default Urun1
