import './CV.css';
import Profile from '../assets/3.jpg';
import Image from '../assets/1.png'
import {FaLinkedin} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
function App() {
  return (
    <div>
<div className='header'>
  <img className='profile' src={Profile} alt="profile" /> 
  <h1>Deividas Skirgaila</h1>
      <p>Web programuotojas</p>
</div>
     <div className="cv-container"> 
    
      <div className="cv-column">
         
        <section>
        <h2>Kontaktai</h2>
        <ul className='contact'>
        <li>
       <FaLinkedin/> <a href='https://www.linkedin.com/in/deividas-skirgaila-7a6b00253/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <li>
         <FaGithub/> <a href="https://github.com/Deivixas" target="_blank" rel="noopener noreferrer" >GitHub</a>
          </li>
          </li>
          <li>
            <FaBirthdayCake /> 1997-05-25 (26 m.)
          </li>
          <li>
            <BsTelephoneFill /> +37060312129
          </li>
          <li>
            <SiGmail /> deividas.skirgaila525@gmail.com
          </li>
          <li>
            <FaHome /> Kaunas
          </li>
        </ul>
      </section>
      <section>
            <h2>Išsilavinimas</h2>
            <h3>CodeAcademy</h3>
            <p>Web/intensyvus/480h-kursai</p>
            <img className="photo" src={Image} alt="img" />
          </section>

      <section>
            <h2>Įgūdžiai</h2>
            <ul>
              <li className="bold">React</li>
              <li className="bold">JavaScript</li>
              <li className="bold">HTML</li>
              <li className="bold">CSS</li>
              <li>Dizainas pritaikytas visiem įrenginiam</li>
              <li>Versijavimo sistema (Git)</li>
              <li>Problemų sprendimas</li>
            </ul>
          </section>
         
         
      </div>
      <div className="cv-column"> 
      
     
      <section >
            <h2>Apie mane</h2>
            <p >           
            Kaip aistringas priekinės dalies kūrėjas, man puikiai sekasi kurti patogias žiniatinklio programas naudojant React, JavaScript ir CSS. Taikydamas iniciatyvų mokymosi metodą, nuolat matau naujausius žiniatinklio kūrimo pasiekimus, todėl galiu greitai prisitaikyti ir pateikti naujoviškus sprendimus. Man sekasi peržengti ribas, kurti įsimintinas internetines patirtis ir bendradarbiauti su pažangiomis komandomis. Sukurkime ką nors išskirtinio kartu!
            </p>
          </section>
          <section >
            <h2>Darbo patirtis</h2>
            <h3>Siuntų rūšiavimas</h3>
            <p>DPD Lietuva</p>
            <ul>
              <li>Siuntų rūšiavimas pagal regionus, miestus.</li>
              <li>Siuntų iškrovimas ir pakrovimas į priekabas rankiniu būdu</li>
              <li>
              Krovinio transporto iškrovimas ir pakrovimas elektriniu šakiniu krautuvu.
              </li>
              <li>CMR dokumentų pildymas.</li>
              <li>Sandėlio priežiūra ir organizavimas.</li>
            </ul>
          </section> 
          <section >
            <h2>Kalbos</h2>
            <ul>
              <li>Lietuvių</li>
              <li>Anglų</li>
            </ul> 
            </section>

      </div>
    </div>

    </div>
  );
}

export default App;
