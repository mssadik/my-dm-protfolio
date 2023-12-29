import { useState, useEffect } from 'react';
import './FacebookPreWork.css'; // Import your CSS file for component-specific styles

const YoutubePreWork = () => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust the path based on your project structure
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const openModal = (image) => {
    console.log(image);
    setSelectedImage(image);
    setIsModalOpen(true);
  };



  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const facebookMarketingData = data.filter((item) => item.name === 'Youtube Marketing');

  return (
    <section className='bg-black'>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 lg:grid-cols-4 gap-4">
        {facebookMarketingData.map((item) => (
          <div key={item.id} className="facebook-prework-item">
            <div
              className="image-container"
              onClick={() => openModal(item.img)}
              onMouseEnter={() => setSelectedImage(item.img)}
              onMouseLeave={() => setSelectedImage(item.img)}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`facebook-prework-image ${selectedImage === item.img ? 'hovered' : ''}`}
              />
              <h3 className="text-emerald-500 text-2xl mb-2 font-extrabold font-serif">{item.name}</h3>
              {selectedImage === item.img && (
                <div className="image-overlay">
                  <p className="image-name">{item.name}</p>
                </div>
              )}
            </div>
            <p className="text-xs md:text-base text-gray-300">{item.text}</p>
          </div>
        ))}

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <img src={selectedImage} alt="Selected" className="full-size-image" />
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YoutubePreWork;










