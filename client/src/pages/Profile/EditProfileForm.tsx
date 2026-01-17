import React, { useState, useEffect } from 'react';
import { auth, storage, db } from '../../firebase-config'; // Firebase-dən istifadə edirik
import { FaUpload } from 'react-icons/fa';
import { updateProfile } from 'firebase/auth'; // Profil məlumatlarını yeniləmək üçün Firebase funksiyası
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Profil şəkilini yükləmək üçün
import { doc, updateDoc } from 'firebase/firestore'; // Firebase Firestore ilə məlumatları yeniləmək üçün
import './Profile.css';

const EditProfileForm: React.FC = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');
  const [newPhoto, setNewPhoto] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = auth.currentUser;
        
        if (user) {
          setDisplayName(user.displayName || '');
          setPhoneNumber(user.phoneNumber || '');
          setPhotoURL(user.photoURL || '');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); 

  // Profil şəkli dəyişdirmə funksiyası
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setNewPhoto(event.target.files[0]);
    }
  };

  // Dəyişiklikləri yadda saxlama funksiyası
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault(); // Formun göndərilməsinin qarşısını alır

    try {
      let newPhotoURL = photoURL; // Əgər şəkil dəyişdirilməyibsə, mövcud şəkil URL-sini saxla

      if (newPhoto) {
        const imageRef = ref(storage, `profile-pics/${auth.currentUser?.uid}`);
        await uploadBytes(imageRef, newPhoto);
        newPhotoURL = await getDownloadURL(imageRef); // Yeni şəkil URL-i
      }

      // Profil məlumatlarını yeniləmək
      await updateProfile(auth.currentUser!, {
        displayName,
        photoURL: newPhotoURL,
      });

      // Firestore-da istifadəçi məlumatlarını yeniləmək
      const userRef = doc(db, 'users', auth.currentUser!.uid);
      await updateDoc(userRef, {
        displayName,
        phoneNumber,
        photoURL: newPhotoURL,
      });

      alert('Profil məlumatlarınız uğurla yeniləndi!');
    } catch (error) {
      console.error('Profil yenilənərkən xəta baş verdi:', error);
      alert('Profil yenilənərkən xəta baş verdi!');
    }
  };

  return (
    <div className="edit-profile-form">
      <h2>Profili Düzənlə</h2>
      <form onSubmit={handleSave}> {/* formun onSubmit daxilində handleSave funksiyasını çağırırıq */}
        <div className="input-group">
          <label>Ad və Soyad</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Ad və soyadınızı daxil edin"
          />
        </div>
        <div className="input-group">
          <label>Telefon Nömrəsi</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Telefon nömrənizi daxil edin"
          />
        </div>
        <div className="input-group">
          <label>Profil Şəkli</label>
          <input 
            type="file" 
            accept="image/*" 
            id="file-upload" 
            onChange={handleImageChange} 
          />
          
          {photoURL && !newPhoto && <img src={photoURL} alt="Profil" />}
          {!photoURL && !newPhoto && <p>Profil şəkli yoxdur</p>}
          
          {/* Upload iconu burada, input ilə əlaqələndiririk */}
          <label htmlFor="file-upload" className="upload-btn">
            <FaUpload /> <span>Şəkil Yüklə</span>
          </label>
        </div>
        <button className="save-btn" type="submit">
          Dəyişiklikləri Yadda Saxla
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
