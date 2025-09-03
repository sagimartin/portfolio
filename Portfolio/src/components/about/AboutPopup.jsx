import { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/base';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { aboutHeaderFontSizes, readmeTextFontSizes, iconFontSizes } from "../../styles/typography";

import CloseIcon from '@mui/icons-material/Close';
import './AboutPopup.css';

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - 300),
  y: Math.random() * (window.innerHeight - 400),
});

export default function AboutPopup({ memes, closePopup }) {
  const { t } = useTranslation();
  const [activePopups, setActivePopups] = useState(memes.filter(meme => !meme.hide));
  const [positions, setPositions] = useState(activePopups.map(() => getRandomPosition()));
  const [showReadme, setShowReadme] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current.style.visibility === 'visible') {
        cursorRef.current.style.visibility = 'hidden';
      } else {
        cursorRef.current.style.visibility = 'visible';
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

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
        <Box className="readme">
          <Box className="popup-header">
            <Typography sx={{ fontFamily: 'var(--secondary-font)', fontSize: aboutHeaderFontSizes }}>{t("readme_title")}</Typography>
            <CloseIcon className="project-popup-close-button" onClick={handleCloseReadme} sx={{ fontSize: iconFontSizes, cursor: "pointer" }} />
          </Box>
          <Typography sx={{ fontFamily: 'var(--secondary-font)', fontSize: readmeTextFontSizes }} className='readme-text'>
            {t("readme_text")}<span ref={cursorRef} style={{ visibility: 'hidden' }}>|</span>
          </Typography>
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
            <Typography sx={{ fontFamily: 'var(--secondary-font)', fontSize: aboutHeaderFontSizes }}>
              {t(meme.title)}
            </Typography>

            <CloseIcon className="project-popup-close-button" onClick={() => handleClosePopup(index)} sx={{ fontSize: iconFontSizes, cursor: "pointer" }} />
          </Box>

          <Box className="popup-image-container">
            <img src={`/assets/images/about/${meme.src}`} alt={t(meme.title)} title={t(meme.title)} />
          </Box>
        </Box>
      ))}
      {window.innerWidth > 800 && activePopups.length > 0 && (
        <Button className='popup close-all' id='close-all' onClick={handleCloseAll}>{t('close_all')}</Button>
      )}
    </Box>
  );
}
