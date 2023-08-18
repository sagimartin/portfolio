import { Button } from '@mui/base';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import './AboutPopup.css';

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - 300),
  y: Math.random() * (window.innerHeight - 400),
});

export default function AboutPopup({ memes, closePopup }) {
  const [activePopups, setActivePopups] = useState(memes.filter(meme => !meme.hide));
  const [positions, setPositions] = useState(activePopups.map(() => getRandomPosition()));
  const [showReadme, setShowReadme] = useState(true);

  const handleCloseReadme = () => {
    setShowReadme(false);
    if (activePopups.length === 0) closePopup();
  };

  const handleClosePopup = (index) => {
    const newActivePopups = activePopups.filter((_, i) => i !== index);
    setActivePopups(newActivePopups);

    // Generate new positions for remaining popups
    const newPositions = newActivePopups.map(() => getRandomPosition());
    setPositions(newPositions);

    if (newActivePopups.length === 0 && !showReadme) closePopup();
  };

  const handleCloseAll = () => {
    closePopup();
    setActivePopups([]);
    setPositions([]);
    setShowReadme(false);
  };

  return (
    <Box className="popup-overlay">
      {showReadme && (
        // README Popup
        <Box className="popup readme">
          <Box className="popup-header drag-handle-readme">
            <Typography style={{ fontFamily: 'var(--secondary-font)' }}>README.md</Typography>
            <Button className="close-button" onClick={handleCloseReadme}>X</Button>
          </Box>
          <Typography style={{ fontFamily: 'var(--secondary-font)' }} className='readme-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</Typography>
        </Box>
      )}
      {activePopups.map((meme, index) => (
        // Meme Popups
        <Box
          className="popup"
          key={index}
          style={{ position: 'absolute', top: positions[index].y, left: positions[index].x }}
        >
          <Box className="popup-header drag-handle">
            <Typography style={{ fontFamily: 'var(--secondary-font)' }}>
              {meme.title}
            </Typography>
            <Button className="close-button" onClick={() => handleClosePopup(index)}>X</Button>
          </Box>

          <Box className="popup-image-container">
            <img src={`/assets/images/about/${meme.src}`} alt={meme.title} title={meme.title} />
          </Box>
        </Box>
      ))}
      <Button className='popup close-all' onClick={handleCloseAll}>Close All ✕</Button>
    </Box>
  );
}
