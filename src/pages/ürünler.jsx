import Turk from "../assets/turk.webp";
import Avantaj from "../assets/avantaj.webp";
import Harman from "../assets/harman.webp";
import { useNavigate } from "react-router-dom";

function Urunler() {
  const navigate = useNavigate();

  return (
    <div className="urunler">
      <h1>KAHVELERİMİZ</h1>
      <p>
        Dünyaca ünlü Q Grader uzmanları tarafından 80 puan üstü lezzetle
        derecelendirilmiş Nitelikli Kahvelerimizi keşfedin.
      </p>

      <div className="kahveler">
        <div className="turk">
          <div className="wrapper">
            <img src={Turk} alt="Türk Kahvesi" />
          </div>
          <h3>TÜRK KAHVESİ</h3>
          <button
            className="urun-btn"
            onClick={() => navigate("/urun1")}
          >
            ÜRÜNLERİ GÖR
          </button>
        </div>

        <div className="harman">
          <div className="wrapper">
            <img src={Harman} alt="Harman Kahveler" />
          </div>
          <h3>HARMAN KAHVELER</h3>
          <button className="urun-btn">
            ÜRÜNLERİ GÖR
          </button>
        </div>

        <div className="avantaj">
          <div className="wrapper">
            <img src={Avantaj} alt="Avantajlı Paketler" />
          </div>
          <h3>AVANTAJLI PAKETLER</h3>
          <button className="urun-btn">
            ÜRÜNLERİ GÖR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Urunler;
