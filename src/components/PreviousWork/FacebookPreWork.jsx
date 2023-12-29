import React, { useState, useEffect } from 'react';

const FacebookPreWork = () => {
  const [data, setData] = useState([]);

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

  // Filter the data to only include items with the name "Facebook Marketing"
  const facebookMarketingData = data.filter((item) => item.name === "Facebook Marketing");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {facebookMarketingData.map((item) => (
        <div key={item.id} className="facebook-prework-item">
          <h3 className="text-emerald-500 text-2xl mb-2 font-extrabold font-serif">{item.name}</h3>
          <img src={item.img} alt={item.name} className="facebook-prework-image w-full" />
          <p className="text-xs md:text-base text-gray-300">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FacebookPreWork;
