import React, { useEffect } from 'react'
import book from '../../assets/Öz(e) Güven Sanatı.avif'
import Aos from 'aos'
import Button from '../../Props/Button'
const ProgramHeader:React.FC = () => {

    useEffect(() => {
Aos.init({
    duration:1000
})
    }, [])
  return (
    <div className='program__header' >
        <div data-aos="fade-up">

       
      <div style={{
        textAlign:"center"
      }}>
        <h2>Hər şey özündən başlayır və səninlə bitir.</h2>
        <h5>Özünüzü kəşf edin və davamlı daxili özünəinam yaradın.</h5>
        <div className='image'>
<img src={book} alt="" />
        </div>
        <h4>Özünüzü tanıyın, qorxularınızı qəbul edin və əsl potensialınızı kəşf edin. Bu praktik, əl kitabçasına bənzər təlimatı rəqəmsal şəkildə əldə etmək mümkündür.</h4>
        <div>
            <Button title='Kitabı Əldə Edin' />
        </div>
      </div>
       </div>
    </div>
  )
}

export default ProgramHeader
