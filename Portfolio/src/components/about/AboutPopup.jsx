import { Button } from '@mui/base';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Draggable from 'react-draggable';

import './AboutPopup.css';

export default function AboutPopup({ memes, closePopup }) {
  const [activePopups, setActivePopups] = useState(memes.filter(meme => !meme.hide));
  const initialPositions = activePopups.map(() => getRandomPosition());
  const [positions, setPositions] = useState(initialPositions);
  const [showReadme, setShowReadme] = useState(true);

  const handleCloseReadme = () => {
    setShowReadme(false);
    if (activePopups.length === 0) closePopup();
  };

  const handleClosePopup = (index) => {
    const newActivePopups = activePopups.filter((_, i) => i !== index);
    setActivePopups(newActivePopups);
    const newPositions = positions.filter((_, i) => i !== index);
    setPositions(newPositions);
    if (newActivePopups.length === 0 && !showReadme) closePopup();
  };

  const handleCloseAll = () => {
    closePopup();
    setActivePopups([]);
    setPositions([]);
    setShowReadme(false);
  };

  function getRandomPosition() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    return { x, y };
  }

  return (
    <Box className="popup-overlay">
      {showReadme && (
        <Draggable handle=".drag-handle-readme" bounds="parent" defaultPosition={{ x: '50%', y: '50%' }}>
          <Box className="popup readme drag-handle-readme">
            <Box className="popup-header">
              <Typography>README.md</Typography>
              <Button className="close-button" onClick={handleCloseReadme}>✕</Button>
            </Box>
            <Typography className='readme-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores reiciendis saepe sed, ex rem iure corporis sunt nihil atque velit asperiores veniam nesciunt dignissimos reprehenderit laboriosam quia et architecto optio.</Typography>
          </Box>
        </Draggable>
      )}
      {activePopups.map((meme, index) => (
        <Draggable key={index} handle=".drag-handle" defaultPosition={positions[index]} bounds="parent">
          <Box className="popup drag-handle">
            <Box className="popup-header">
              <Typography>{meme.title}</Typography>
              <Button className="close-button" onClick={() => handleClosePopup(index)}>✕</Button>
            </Box>
            <Box className="popup-image-container">
              <img src={`/assets/images/about/${meme.src}`} alt={meme.title} title={meme.title} />
            </Box>
          </Box>
        </Draggable>
      ))}
      <Button className='popup close-all' onClick={handleCloseAll}>Close All ✕ </Button>
    </Box>
  );
}
