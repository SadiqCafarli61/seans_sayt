import React, { useState } from 'react';
import { init, send } from '@emailjs/browser';

const Footer: React.FC = () => {
  // Form verileri ve hata durumları
  const [form, setForm] = useState({
    username: "",
    language: "",
    email: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    language: "",
    email: ""
  });

  // Form verisini güncelleyen fonksiyon
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form doğrulama fonksiyonu
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      language: "",
      email: ""
    };

    if (!form.username.trim()) {
      newErrors.username = "Ad boş ola bilməz";
      isValid = false;
    }

    if (!form.language) {
      newErrors.language = "Dil seçilməlidir";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = "E-poçt boş ola bilməz";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "E-poçt formatı düzgün deyil";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS için gerekli başlatma
    init('kRYGwQKTnHgVmt4k0'); // Burada sizin EmailJS istifadəçi ID-nizi daxil etməlisiniz

    if (validateForm()) {
      // Form verilerini email göndərmə üçün EmailJS ilə göndərir
      send(
        'service_b6dy90e',   // EmailJS xidmət ID
        'template_tfz25jg',   // Şablon ID
        form                  // Form verisi
      )
      .then(
        (response) => {
          console.log('E-posta başarıyla gönderildi:', response);
          alert('Mesajınız uğurla göndərildi!');
          setForm({ username: "", language: "", email: "" });  // Formu sıfırla
        },
        (error) => {
          console.error('E-posta gönderimi başarısız oldu:', error);
          alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        }
      );
    }
  };

  return (
    <div className='footer'>
      <div className='fragment'>
        <div className="left">
          <h5>Qısa və Öz</h5>
          <h6>Yeniliklərdən xəbərdar olmaq üçün <br /> e-poçt bülletenimizə abunə olun.</h6>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label>Ad *</label>
              <br />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                style={{
                  border: errors.username ? "1px solid red" : ""
                }}
              />
              <br />
              {errors.username && <small style={{ color: "red" }}>{errors.username}</small>}
            </div>

            <div className="mt-3">
              <label>Ünsiyyət Dili *</label>
              <br />
              <select
                name="language"
                value={form.language}
                onChange={handleChange}
                style={{
                  border: errors.language ? "1px solid red" : ""
                }}
              >
                <option value="">Seçin</option>
                <option value="English">İngiliscə</option>
                <option value="Turkish">Türkcə</option>
              </select>
              <br />
              {errors.language && <small style={{ color: "red" }}>{errors.language}</small>}
            </div>

            <div className="mt-3">
              <label>Elektron Poçt *</label>
              <br />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{
                  border: errors.email ? "1px solid red" : ""
                }}
              />
              <br />
              {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
            </div>

            <div className="mt-3">
              <button type="submit">Abunə Olun</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
