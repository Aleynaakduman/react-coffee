import Resim from '../assets/coffe.png'
import Back from '../assets/arkaplan.png'
function Home() {
  return (
    <div className='home' >
      <div className="home-left">
        <img className='coffe' src={Resim} />
        <h3>Bir Fincan Mutluluk.</h3>
        <p>COFFE, özenle seçilen kahve çekirdekleri ve sıcak atmosferiyle gününüze keyif katar.
          </p>

          <button className='btn3' >Daha Fazlası</button>


          


      </div>



        <div className="home-right">
          <img src={Back}/>
        </div>



    </div>

  )
}

export default Home