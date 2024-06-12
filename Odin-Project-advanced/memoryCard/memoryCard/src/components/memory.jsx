import React, { useState, useEffect } from 'react';

const RaccoonGifs = () => {
  const [gifs, setGifs] = useState([]);
  const apiKey = 'r9xEpbboR5c6f2H2dP8iF8iY2yFvrfCP';
  const searchTerm = 'raccoon';
  const limit = 10; // Number of GIFs to fetch

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`,
          { mode: 'cors' }
        );
        const data = await response.json();
        const gifData = data.data.map(gif => ({
          url: gif.images.original.url,
          link: gif.url,
        }));
        setGifs(gifData);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    };

    fetchGifs();
  }, []); // Empty dependency array means this effect runs once after the initial render.

  const shuffleGifs = (event) => {
    event.preventDefault();
    setGifs(prevGifs => {
      const shuffledGifs = [...prevGifs];
      for (let i = shuffledGifs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledGifs[i], shuffledGifs[j]] = [shuffledGifs[j], shuffledGifs[i]];
      }
      return shuffledGifs;
    });
  };

  return (
    <div>
      <h1>Raccoon GIFs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {gifs.map((gif, index) => (
          <a
            key={index}
            href={gif.link}
            onClick={shuffleGifs}
          >
            <img src={gif.url} alt="Raccoon GIF" style={{ margin: '10px', maxWidth: '200px' }} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default RaccoonGifs;
