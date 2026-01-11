import React, { useState } from 'react';
import './Momentum.css'; // Make sure your styles are imported

const ElektronPoct: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    surname: "",
    email: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [errors, setErrors] = useState({
    username: "",
    surname: "",
    email: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: "",
      surname: "",
      email: ""
    };

    if (!form.username.trim()) {
      newErrors.username = "Ad boş ola bilməz";
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
    if (validateForm()) {
      console.log("Form uğurla göndərildi", form);
    }
  };

  return (
    <div className='momentum__gmail'>
      <div className='gmail__starting'>
        <h5>7 gün boyunca her gün benden e-posta yoluyla qoçluq al.</h5>
        <p style={{ paddingTop: "8px" }}>🌿 “Mental Emalatxana” nə verir:</p>
        <div style={{ marginTop: "16px" }}>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>Sən öz daxili emalatxananın içinə girirsən.</strong></div>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>Hansı layihələrin, rolların, arzuların həqiqətən canlı, hansılarının isə ölü, amma vərdişdən daşındığını görürsən.</strong></div>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>Yeni bir daxili xəritə qurursan: bundan sonra nəyi və niyə inşa edirsən.</strong></div>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>Beyin gələcək qarşısında panikanı dayandırır — istiqamət və dayaq hissi yaranır.</strong></div>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>Daxili təhlillər apararaq özünü kəşf edəcəksən.</strong></div>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>Plana sadiq qalarsan, 7 gün ərzində mental və fiziki sağlamlığındakı dəyişiklikləri fərq edəcəksən.</strong></div>
          <div className='dot' style={{ marginBottom: "10px" }}>⭕ <strong>7 günün sonunda qazandığın bu Momentumu, daha çox yaxşılıq halı yaratmaq və hədəflərini həyata keçirmək üçün istifadə edə biləcəksən.</strong></div>
        </div>
        
        <div style={{ paddingTop: "25px" }}>
          <h5>Aşağıda qeydiyyatdan keçin.</h5>
          <h2 style={{
            fontWeight: "bold",
            marginTop: "10px",
            fontSize: "15px"
          }}>E-poçt ünvanınıza təsdiq linki <span style={{
            fontWeight: "normal"
          }}>göndəriləcək. Təsdiqdən sonra kouçinqinizə başlamağa hazır olacaqsınız!</span></h2>
        </div>

        <div className='formStart' style={{
          backgroundColor: "#000",
          width: "600px",
          marginTop: "30px"
        }}>
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
              <label>Soyad *</label>
              <br />
              <input
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                style={{
                  border: errors.surname ? "1px solid red" : ""
                }}
              />
              <br />
              {errors.surname && <small style={{ color: "red" }}>{errors.surname}</small>}
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
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "25px"
            }} className="mt-3 labelInput">
              <input style={{
                width: "20px",
                height: "20px"
              }} type="checkbox" name="" id="" />
              <p style={{
                color: "#fff",
                fontSize: "15px",
                maxWidth: "380px",
                wordSpacing: "2px",
                marginLeft: "5px",
                display: "flex"
              }}>Bülletenə abunə olmaqla e-poçt almaq istəyirəm. (Narahat olmayın, istənilən vaxt abunəlikdən çıxa bilərsiniz.)</p>
            </div>
            <div className="mt-3">
              <button type="submit">Abunə Olun</button>
            </div>
          </form>
        </div>

        {/* Dobi seansı mesajları */}
        <div className='dob-seans-info'>
          <h5>Daxili Sabotajçı ilə üzləş:</h5>
          <p>
            İçindəki kiçik sabotajçı, heç bir səbəb olmadan planlarını pozur. Son anda özünü məhv edən qərarlar verir və sonra buna görə utanır. 
            Artıq onunla üzləş və daxili azadlığını kəşf et! Hər şeyi dəyişdirmək, sadəcə addım-addım özünü yenidən tanımaqla mümkündür.
          </p>
          <p>
            İndi daxili sabotajçıya qarşı mübarizə aparmaq zamanı gəldi! Özünü məhv etməyi dayandır və irəliləyişini gör!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElektronPoct;
