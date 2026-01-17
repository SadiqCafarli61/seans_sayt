import React, { useEffect } from 'react'
import '../App.css'
import Aos from 'aos'

const Home: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <div className="home">
      <div className="content" data-aos="fade-down">
        <h5 className="short-title">Fokuslan!</h5> {/* Qısa və təsirli başlıq */}
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="8.374 96.1 183.052 7.9"
          viewBox="8.374 96.1 183.052 7.9"
          height="50"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
          data-type="color"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <style>{`#comp-m5q0xssh svg [data-color="1"] { fill: #f8f5f0; }`}</style>
          </defs>
          <g>
            <path
              d="M99.8 104c-.9 0-1.3-.4-1.4-.7-.5-1.1 1.1-3 1.7-3.6 1.1-1.1 1.8-2.3 1.6-2.6 0-.1-.2-.1-.5-.1-.7 0-1.4.4-2.5 1-5.5 2.9-20.2 10.7-89.9-.2-.3 0-.5-.3-.4-.5 0-.3.3-.4.6-.4 69.4 10.9 83.8 3.2 89.3.3 1.2-.6 2-1.1 2.9-1.1.9 0 1.3.4 1.4.7.5 1.1-.9 2.8-1.8 3.6-1 1-1.7 2.2-1.5 2.6.1.1.3.1.5.1.5 0 .9-.2 1.7-.6 2.3-1.2 6.6-3.3 19.5-4.1 15.7-.9 39.3.6 70 4.6.3 0 .5.3.4.5 0 .3-.3.4-.6.4-71.9-9.2-84.7-2.7-88.9-.6-.8.4-1.4.7-2.1.7z"
              fill="#f8f5f0"
            />
          </g>
        </svg>

        <h3>Premium Dönüşüm Proqramı</h3>
        <h4>Öz Həyatını Yaradaraq Potensialını Azad Et.</h4>
        <h1>İçindəki Gücü Kəşf Et: Daxili Potensialını Üzə Çıxar və Həyatını Dəyişdir!</h1>
        <p>
          90 Gün ərzində öz daxili potensialını üzə çıxararaq, daha azad, daha orijinal və daha güclü bir həyat yaratmağa yalnız bir addım qalırsan.
        </p>
      </div>

      {/* Video bölməsi */}
      <section className="video__section">
        <div>
          <iframe
            src="https://www.youtube.com/embed/i2j3qjm--24?si=cLMRJgLDJl4JMSed"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className="video__button">
          <button>Videonu İzlə və Yol Xəritəsi Seansını Yarat</button>
        </div>
      </section>
    </div>
  )
}

export default Home
