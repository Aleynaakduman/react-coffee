import { useNavigate } from "react-router-dom";
import Resim from '../assets/coffe.png'
import Back from '../assets/arkaplan.png'

function Home() {
   const navigate = useNavigate();
  return (
    <div className='home' >
      <div className="home-left">
        <img className='coffe' src={Resim} />
        <h3>Bir Fincan Mutluluk.</h3>
        <p>COFFE, özenle seçilen kahve çekirdekleri ve sıcak atmosferiyle gününüze keyif katar.
          </p>

          <button className='btn3' onClick={() => navigate("/daha-fazlası")} >Daha Fazlası</button>


          


      </div>



        <div className="home-right">
          <img src={Back}/>
        </div>



    </div>
   
  )
}



export default Home