import React, { useEffect } from 'react'
import logo from '../assets/logo.avif'
import Aos from 'aos'
const LogoText:React.FC = () => {

  useEffect(()=> {
    Aos.init({
      duration:1000
    })
  })
  return (
    <div className='logo__container'>
        <div data-aos="fade-down" style={{
          textAlign:"center"
        }}>
            <img src={logo} alt="" />
            <h2>Baxışını dəyişdir;<br  />həyatın dəyişsin.</h2>
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="8.374 96.1 183.052 7.9" viewBox="8.374 96.1 183.052 7.9" height="50" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs><style>#comp-m5q0xssh svg [data-color="1"] </style></defs>
    <g>
        <path d="M99.8 104c-.9 0-1.3-.4-1.4-.7-.5-1.1 1.1-3 1.7-3.6 1.1-1.1 1.8-2.3 1.6-2.6 0-.1-.2-.1-.5-.1-.7 0-1.4.4-2.5 1-5.5 2.9-20.2 10.7-89.9-.2-.3 0-.5-.3-.4-.5 0-.3.3-.4.6-.4 69.4 10.9 83.8 3.2 89.3.3 1.2-.6 2-1.1 2.9-1.1.9 0 1.3.4 1.4.7.5 1.1-.9 2.8-1.8 3.6-1 1-1.7 2.2-1.5 2.6.1.1.3.1.5.1.5 0 .9-.2 1.7-.6 2.3-1.2 6.6-3.3 19.5-4.1 15.7-.9 39.3.6 70 4.6.3 0 .5.3.4.5 0 .3-.3.4-.6.4-71.9-9.2-84.7-2.7-88.9-.6-.8.4-1.4.7-2.1.7z" fill="#f8f5f0" data-color="1"></path>
    </g>
</svg>
<div className=' text'> 
<p>Dərin perspektivlər, pərdəarxası hekayələr və endirim təklifləri ilə dolu bazar günü e-poçtlarımı almaq üçün elektron poçt bülleteniminə abunə olun.</p>
<p style={{
  paddingTop:"28px"
}}>Qısa hekayələr və yeniliklərlə dolu bu bülleten sizə yoldaşlıq və rəhbərlik təklif etmək, eləcə də baxış bucağınızı dəyişdirməyə kömək etmək üçün hazırlanmışdır.</p>
</div>
        </div>
    </div>
  )
}

export default LogoText
