import { useState } from 'react';
import { Button } from '@mui/base';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
    if (activePopups.length > 0) {
      closePopup();
      setActivePopups([]);
      setPositions([]);
      setShowReadme(false);
    } else if (!showReadme) {
      // If no active popups and README is already closed, reset to initial state
      const newActivePopups = memes.filter(meme => !meme.hide);
      setActivePopups(newActivePopups);
      setPositions(newActivePopups.map(() => getRandomPosition()));
      setShowReadme(true);
    }
  };

  return (
    <Box className="popup-overlay">
      {showReadme && (
        // README Popup
        <Box className="popup readme">
          <Box className="popup-header">
            <Typography style={{
              fontFamily: 'var(--secondary-font)', fontSize: {
                xs: '1.5rem',
                sm: '1.7rem',
                md: '1.7rem',
                lg: '2.5rem',
                xl: '3rem',
              },
            }}>README.md</Typography>
            <CloseIcon className="project-popup-close-button" onClick={handleCloseReadme} sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '1.7rem',
                md: '1.7rem',
                lg: '2rem',
                xl: '2rem',
              }, cursor: "pointer"
            }} />
          </Box>
          <Typography style={{
            fontFamily: 'var(--secondary-font)', fontSize: {
              xs: '1.5rem',
              sm: '1.7rem',
              md: '1.7rem',
              lg: '2.5rem',
              xl: '3.5rem',
            },
          }} className='readme-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</Typography>
        </Box>
      )}
      {activePopups.map((meme, index) => (
        // Meme Popups
        <Box
          className="popup"
          key={index}
          style={{ position: 'absolute', top: positions[index].y, left: positions[index].x }}
        >
          <Box className="popup-header">
            <Typography style={{
              fontFamily: 'var(--secondary-font)', fontSize: {
                xs: '1.5rem',
                sm: '1.7rem',
                md: '1.7rem',
                lg: '2.5rem',
                xl: '3rem',
              },
            }}>
              {meme.title}
            </Typography>

            <CloseIcon className="project-popup-close-button" onClick={() => handleClosePopup(index)} sx={{
              fontSize: {
                xs: '1.5rem',
                sm: '1.7rem',
                md: '1.7rem',
                lg: '2rem',
                xl: '2rem',
              }, cursor: "pointer"
            }} />
          </Box>

          <Box className="popup-image-container">
            <img src={`/assets/images/about/${meme.src}`} alt={meme.title} title={meme.title} />
          </Box>
        </Box>
      ))}
      {activePopups.length > 0 && (
        <Button className='popup close-all' onClick={handleCloseAll}>Close All ✕</Button>
      )}
    </Box>
  );
}
