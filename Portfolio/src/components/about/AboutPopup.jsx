import { Button } from '@mui/base';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Draggable from 'react-draggable';
import './AboutPopup.css';

// Initialize positions for popups
const initializePositions = (activePopups, popupWidth, popupHeight) => {
  return activePopups.map(() => ({
    x: Math.floor(Math.random() * (window.innerWidth - popupWidth)),
    y: Math.floor(Math.random() * (window.innerHeight - popupHeight)),
  }));
};

export default function AboutPopup({ memes, closePopup }) {
  const [activePopups, setActivePopups] = useState(memes.filter(meme => !meme.hide));
  const [positions, setPositions] = useState(() => initializePositions(activePopups, 300, 400));
  const [showReadme, setShowReadme] = useState(true);

  // Handle close README
  const handleCloseReadme = () => {
    setShowReadme(false);
    if (activePopups.length === 0) closePopup();
  };

  // Handle close individual popup
  const handleClosePopup = (index) => {
    const newActivePopups = [...activePopups];
    newActivePopups.splice(index, 1);
    setActivePopups(newActivePopups);

    // Generate new positions for remaining popups
    const newPositions = initializePositions(newActivePopups, 300, 400);
    setPositions(newPositions);

    if (newActivePopups.length === 0 && !showReadme) closePopup();
  };

  // Handle close all popups
  const handleCloseAll = () => {
    closePopup();
    setActivePopups([]);
    setPositions([]);
    setShowReadme(false);
  };

  // Handle drag event for popup
  const handleDrag = (index, newPosition) => {
    const newPositions = [...positions];
    newPositions[index] = newPosition;
    setPositions(newPositions);
  };

  return (
    <Box className="popup-overlay">
      {showReadme && (
        // README Popup
        <Draggable handle=".drag-handle-readme" bounds={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }}
          defaultPosition={{ x: '50%', y: '50%' }}>
          <Box className="popup readme drag-handle-readme">
            <Box className="popup-header">
              <Typography>README.md</Typography>
              <Button className="close-button" onClick={handleCloseReadme}>✕</Button>
            </Box>
            <Typography className='readme-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</Typography>
          </Box>
        </Draggable>
      )}
      {activePopups.map((meme, index) => (
        // Meme Popups
        <Draggable key={index} handle=".drag-handle" position={positions[index]} bounds={{ top: 0, left: 0, right: window.innerWidth, bottom: window.innerHeight }} onDrag={(_, newPosition) => handleDrag(index, newPosition)}>
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
      <Button className='popup close-all' onClick={handleCloseAll}>Close All ✕</Button>
    </Box>
  );
}
