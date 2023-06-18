import React, { useState } from 'react';
import style from './Navbar.module.css';
import Logo from '../../assets/logo.png';
import Visit from '../../assets/visit.png';
import VisitS from '../../assets/visits.png';
import Room1 from '../../assets/room1.png';
import Room2 from '../../assets/room2.png';
import WIFI from '../../assets/wifi.png';
import ServiceS from '../../assets/service_sm.png';
import Price from '../../assets/price.png';
import PriceS from '../../assets/prices_sm.png';
import Map from '../../assets/map.png';
import MapS from '../../assets/map_sm.png';
import TravelS from '../../assets/travel_sm.png';


import Mountains from '../../assets/mountains.mp4';
import Crimea from '../../assets/Crimea.mp4';
import Ocean from '../../assets/ocean.mp4';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div className='container'>
        <div className={style.box}>
          <div className={style.logo_image}>
            <img src={Logo} alt='/' />
            {/* <img src={LogoText} alt='/' /> */}
            {/* <p>Logo</p> */}
            {/* <p>Дворик</p> */}
          </div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <a href='##'>Product</a>
            </li>
            <li>
              <a href='##'>About Us</a>
            </li>
            <li>
              <a href='##'>Customers</a>
            </li>
            <li>
              <a href='##'>Price</a>
            </li>
            <li>
              <a href='##'>Contacts</a>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>

      </div>
      {/* <div className="block">
            <img src={Blk} alt='/' />
        </div> */}
      <div className='main'>
            {/* <div className='overlay'></div> */}
            <video src={Mountains} autoPlay loop muted></video>
            <div className='content'>
              {/* <h1>Добро пожаловать!</h1>
              <h2>Планируете отпуск? Приезжайте к нам!</h2> */}
            </div>
        </div>

        <div className="block home">
            <img src={Visit} alt='/' />
        </div>

        <div className="block visit">
            <img src={VisitS} alt='/' />
        </div>

        <div className="container">
        <div className="block hotel">
            <img src={Room1} alt='/' />
        </div>
        <div className="block hotel">
            <img src={Room2} alt='/' />
        </div>
        <div className="block hotel">
            <img src={Room1} alt='/' />
        </div>
        <div className="block hotel">
            <img src={Room2} alt='/' />
        </div>
        </div>

        <div className="block hotels">
            <img src={TravelS} alt='/' />
        </div>

        <div className='main'>
            <video src={Crimea} autoPlay loop muted></video>
        </div>

        <div className="block wifi">
            <img src={WIFI} alt='/' />
        </div>

        <div className="block services">
            <img src={ServiceS} alt='/' />
        </div>

        <div className="block price">
            <img src={Price} alt='/' />
        </div>

        <div className="block prices">
            <img src={PriceS} alt='/' />
        </div>

        <div className='main'>
            <video src={Ocean} autoPlay loop muted></video>
        </div>

        <div className="block map">
            <img src={Map} alt='/' />
        </div>

        <div className="block map_sm">
            <img src={MapS} alt='/' />
        </div>

    </header>
  );
};

export default NAvbar;
