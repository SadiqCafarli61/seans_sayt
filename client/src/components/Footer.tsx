import React, { useState } from 'react'

const Footer:React.FC = () => {

    const [form,setForm] = useState({
        username:"",
        language:"",
        email:""
    })

    const handleChange  =(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name,value} = e.target
        setForm(prev => ({
            ...prev,
            [name]:value
        }))
    }

    const [errors,setErrors] = useState({
        username:"",
        language:"",
        email:""
    })
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

  if (validateForm()) {
    console.log("Form uğurla göndərildi", form);
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
  )
}

export default Footer
