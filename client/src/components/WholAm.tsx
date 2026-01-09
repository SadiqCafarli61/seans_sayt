import Aos from 'aos';
import React, { useEffect } from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import fidan from '../assets/fidan.jpg'
const WholAm:React.FC = () => {

      useEffect(() => {
    Aos.init({
      duration:1000
    })
      }, [])
  return (
    
    <div className='who'>
       <div className='main' data-aos="flip-left">
<div className="left" data-aos="fade-right" >
  <h4>Fidan Kimdir?</h4>
  <h6>Reallıq axtarışında potensial.</h6>
  <p className='text1'>
Mən iddialı şəxsi inkişaf brendi olan Creative Transformation-ın təsisçisiyəm; Transformasiya və Uyğunlaşdırma Məşqçisi. Mən həm də onun arzularının arxasınca gedən yazıçıyam, tək qızıyam, azadlığa can atan bir ruham.
  </p>
  <p className="text2">
    Mən də sizin kimi öz varlığımı sevməyə, şəfa verməyə və yüksəltməyə çalışan biriyəm. Narahatlıqla başladığım bu yolda geridə çətin bir hüquq təhsili, uğurlu vəkil karyerası, çoxlu yaxın dostlar, bir neçə şəhər, bildiyim zənn etdiyim “həqiqətlər” və keçmiş həyatımdakı bütün hekayələr geridə qaldı. Nəhayət heçliyə çatanda həm hər şeyi, həm də əsl mənliyimi tapdım. Sənin kimi qiymətli daşların dünyaya işıq saçmasına kömək etməyi öz vizyonum etdim.
  </p>
  <div className="icons">
        <FaTelegramPlane color='#fff' cursor="pointer" />
    <BsInstagram onClick={() =>window.open("https://www.instagram.com/djaffarzadeh/")} color='#fff' cursor="pointer" style={{
        marginLeft:"20px"
    }} />
        <FaYoutube color='#fff' cursor="pointer" style={{
        marginLeft:"20px"
    }} />
  </div>
  <div style={{
    marginTop:"40px"
  }} className="e__post">
<button>Elektron-poçt</button>
  </div>
  <div className="main__text">
    <div className="centerr">
    <img src={fidan} alt="" />
    <h4>əsas konsepsiya | hizalanma
transformasiya məşqçisi</h4>
</div>
  </div>
</div>
<div className="center">
    <img src={fidan} alt="" />
    <h4>əsas konsepsiya | hizalanma
transformasiya məşqçisi</h4>
</div>
<div className="right__side" >
  
</div>
       </div>
    </div>
  )
}

export default WholAm
