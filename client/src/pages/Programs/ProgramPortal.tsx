import React from 'react'
import Button from '../../Props/Button'

const ProgramPortal:React.FC = () => {
  return (
    <div className='program__header'>
      <div style={{
        textAlign:"center"
      }}>
<h2>Maqnetik Qadın Portalı</h2>
<h5>Qadın cazibədarlığınızı və axınınızı bərpa edin.</h5>
<h3>Qadın yaralarınızı sağaldın, özünəinamınızı və dəyərinizi artırın, ən yüksək qadınlığınızı təcəssüm etdirin. Daxildəki ilahəni azad edin.</h3>
<div>
    {/* carousel items */}
</div>
<div className='last__text'>
    <p>Bədən, Enerji və Mən arasındakı boşluğu aradan qaldıran bu "AKTİVLƏŞDİRMƏ SİSTEMİ" vasitəsilə fərdiləşdirilmiş bir səyahət yaşayın.

Daxili sisteminizi, emosional gücünüzü və enerji tezliyinizi hüceyrə səviyyəsində yenidən kodlaşdırın. Qadın enerjinizdən istifadə edərək reallığınızı yaratmağa başlayın.</p>
</div>
<div>
    <Button title='Portala Get' />
</div>
      </div>
    </div>
  )
}

export default ProgramPortal
