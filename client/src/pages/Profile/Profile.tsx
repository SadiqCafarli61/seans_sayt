import React, { useEffect, useState } from 'react';
import './Profile.css';
import { auth } from '../../firebase-config';
import { FaEdit } from "react-icons/fa";
// Komponentlər

import Subscriptions from '../Subscriptions/Subscriptions';
import Programs from '../Program/Programs';
import Sessions from '../Seans/Seans';
import Orders from '../Orders/Orders';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const photoURL = auth.currentUser?.photoURL || 'path/to/default-image.jpg';

  type LinkProps = {
    id: number;
    title: string;
  };

  const links: LinkProps[] = [
    { id: 1, title: 'Profil' },
    { id: 2, title: 'Abunəliklərim' },
    { id: 3, title: 'Proqramlarım' },
    { id: 4, title: 'Seanslarım' },
    { id: 5, title: 'Sifarişlərim' },
    { id: 6, title: 'Çıxış' },
  ];

  const [selectedLink, setSelectedLink] = useState<string>('Profil');

  useEffect(() => {
    const fetchMenuLinks = async () => {
      try {
        const savedMenu = localStorage.getItem('selectedMenu');
        if (savedMenu) {
          setSelectedLink(savedMenu);
        } else {
          setSelectedLink(links[0].title); // Başlanğıc olaraq "Profil" seçilsin
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMenuLinks();
  }, [links]);

  const navigate = useNavigate()
  const handleClick = async (title: string) => {
try {
  if(title === "Çıxış"){
    await signOut(auth)
    navigate("/")
      localStorage.removeItem("selectedMenu");
  } else{
     setSelectedLink(title); 
      localStorage.setItem('selectedMenu', title);
  }
} catch (error) {
  console.log(error)
}
  };

  // Müvafiq komponenti göstərmək üçün
  const renderContent = () => {
    switch (selectedLink) {
    
      case 'Abunəliklərim':
        return <Subscriptions />;
      case 'Proqramlarım':
        return <Programs />;
      case 'Seanslarım':
        return <Sessions />;
      case 'Sifarişlərim':
        return <Orders />;
      default:
        return <div>Profil məlumatları burada göstəriləcək.</div>;
    }
  };

  const joinDate = auth.currentUser?.metadata.creationTime;
  const formattedDate = joinDate ? new Date(joinDate).toLocaleDateString("tr-TR",{
    day:"2-digit",
    month:"short",
    year:"numeric"
  }) : "Yoxdur"
  return (
    <div className="profile">
      <div className="profile__navbar">
        <div style={{ display: 'flex', alignItems: 'center' }} className="image_text">
          <div className="image">
            <img src={photoURL} alt="" />
          </div>
          <div className="about">
            <h2>{auth.currentUser?.displayName}</h2>
          </div>
        </div>

        <div className="links__media">
          {links.map((link) => (
            <a
              key={link.id}
              style={{
                color: selectedLink === link.title ? '#FF64BA' : '',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                marginBottom: '10px',
              }}
              onClick={() => handleClick(link.title)}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className='profile__menu'>
<div className="main__profile">
  <div className="left">
<h2 style={{
  fontSize:"22px",
  color:"#D1D1B6"
}}>Profil</h2>
<p style={{
  color:"#fff",
  marginTop:"10px"
}}>Qoşulma tarixi: <span>{formattedDate}</span></p>
  </div>
  <div onClick={() =>navigate("/edit-profile")} className="right">
<FaEdit color='#9D9D9D' style={{
  marginTop:"2px"
}} />
<span>Profili düzənlə</span>
  </div>
</div>
      </div>

      <div className="profile__content">
        {renderContent()} {/* Müvafiq komponenti göstər */}
      </div>
    </div>
  );
};

export default Profile;
