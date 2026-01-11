import React, { useEffect } from 'react'
import book from '../../assets/Öz(e) Güven Sanatı.avif'
import Aos from 'aos'
import Button from '../../Props/Button'

const ProgramHeader: React.FC = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <div className="program__header">
      <div data-aos="fade-up">
        <div style={{
          textAlign: "center"
        }}>
          <h2>İçindəki Gücü Kəşf Et və Həyatını Dəyişdir.</h2> {/* Bu başlıq daha çox daxili gücü tapmağa yönəlir */}
          <h5>Öz potensialını üzə çıxar və hər sahədə yeni zirvələrə çat!</h5> {/* Potensialın kəşfi və yüksəlişə çağırış */}
          <div className="image">
            <img src={book} alt="Öz(e) Güven Sanatı" />
          </div>
          <h4>Özünü tanıyaraq qorxularını qəbul et və əsl potensialını ortaya çıxar. Bu rəqəmsal təlimatla həyatında dəyişiklik yaratmağa başla.</h4> {/* Özünü tanımaq və daxili gücü kəşf etmək mövzusuna uyğun dəyişiklik */}
          <div>
            <Button title="Potensialını Kəşf Et" /> {/* Kitabı əldə et → daha motivasiyaedici bir ifadə */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramHeader
