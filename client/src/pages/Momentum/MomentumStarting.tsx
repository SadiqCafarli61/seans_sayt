import React, { useEffect, useState } from 'react';
import videoBg from './videpop.mp4'; // Video yolu

const MomentumStarting: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Arxa planı 5 saniyədə bir dəyişdir
    const interval = setInterval(() => {
      setIsPlaying(prevState => !prevState);
    }, 8000); // Keçid hər 8 saniyədə bir olacaq

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="momentum" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Video fonu üçün element */}
      {isPlaying && (
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isPlaying ? 1 : 0, // Video göstərilsin
            transition: 'opacity 3s ease-in-out', // Yavaş keçid
          }}
        />
      )}

      {/* Şəkil fonu (video yoxdursa) */}
      {!isPlaying && (
        <div
          style={{
            backgroundColor: "#000", // Fallback olaraq qara fon
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: isPlaying ? 0 : 1, // Şəkil göstərilsin
            transition: 'opacity 3s ease-in-out', // Yavaş keçid
          }}
        />
      )}

      {/* Yazılar və düymələr */}
      <div className="moment_word" style={{ position: 'relative', zIndex: 1 }}>
        {['Pulsuz', 'Pulsuz', 'Pulsuz', 'Pulsuz'].map((word, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h4
              style={{
                color: isPlaying ? '#fff' : '#696969',
                fontSize: '52px',
                textTransform: 'uppercase',
                marginLeft: '24px',
              }}
            >
              {word}
            </h4>
            <button
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                marginLeft: '15px',
                border: "none",
                outline: "none",
                backgroundColor: isPlaying ? '#4743C5' : '#696969',
              }}
            ></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MomentumStarting;
