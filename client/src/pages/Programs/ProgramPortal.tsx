import React from 'react'
import Button from '../../Props/Button'

const ProgramPortal: React.FC = () => {
  return (
    <div className='program__header'>
      <div style={{
        textAlign: "center"
      }}>
        <h2>Maqnetik Qadın Portalı</h2>
        <h5>Qadın cazibədarlığınızı və axınınızı bərpa edin.</h5>
        <h3>Qadın yaralarınızı sağaldın, özünəinamınızı və dəyərinizi artırın, ən yüksək qadınlığınızı təcəssüm etdirin. Daxildəki ilahəni azad edin.</h3>

        <div>
          {/* carousel items */}
        </div>

        <div className='last__text'>
          <p>
            Bədən, Enerji və Mən arasındakı boşluğu aradan qaldıran bu "AKTİVLƏŞDİRMƏ SİSTEMİ" vasitəsilə fərdiləşdirilmiş bir səyahət yaşayın.
            Daxili sisteminizi, emosional gücünüzü və enerji tezliyinizi hüceyrə səviyyəsində yenidən kodlaşdırın. 
            Qadın enerjinizdən istifadə edərək reallığınızı yaratmağa başlayın.
          </p>
          <p style={{ marginTop: '20px' }}>
            <strong>Dobi ilə tanışlıq:</strong> İçindəki "qəsdən" hər şeyi korlayan balaca sabotajçı ilə üzləş. 
            O, sənə ən böyük potensialını reallaşdırmağa mane olan gizli qorxulardır.
          </p>
          <p>
            Dobi, heç bir səbəbi olmadan planları pozur, özünə ziyan verən qərarlar verir və sonra utanaraq, sanki bu hissdən zövq alır. Bu sabotajçı, sənin irəliləyişinin qarşısını alır və sanki daxili “ağrı”nı qoruyur. Amma, artıq onu tanımağa və dəyişdirməyə hazırsan!
          </p>
          <p>
            Bu "AKTİVLƏŞDİRMƏ SİSTEMİ" ilə, bu daxili sabotajçı ilə düşmən kimi deyil, bir uşağa baxan bir insan kimi tanış olacaqsan. Artıq "öz həyatımı dağıdım ki, nəyisə sübut edim" düşüncəsinə yer yoxdur. 
            Sakit və təhlükəsiz bir hiss gəlir: "Mən böyüklər kimi hərəkət edə bilərəm və daxili azadlığımı itirmirəm."
          </p>
          <p>
            Dobi'nin sabotajı gedir, amma sən daha canlı, dəcəl və həyat dolu olmağa başlayırsan. Bu, sənin daxili azadlığını kəşf etməyə və həyatını tam şəkildə yaşamağa başlaman deməkdir.
          </p>
        </div>

        <div>
          <Button title='Portala Get' />
        </div>
      </div>
    </div>
  )
}

export default ProgramPortal
