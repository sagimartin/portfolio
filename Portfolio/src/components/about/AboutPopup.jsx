import { Button } from '@mui/base';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import Draggable from 'react-draggable';

import './AboutPopup.css';

export default function AboutPopup({ memes, closePopup }) {
  const [activePopups, setActivePopups] = useState(memes.filter(meme => !meme.hide));
  const [showReadme, setShowReadme] = useState(true);

  const handleClosePopup = (index) => {
    setActivePopups(prevPopups => prevPopups.filter((_, i) => i !== index));
    if (activePopups.length === 1) closePopup();
  };

  return (
    <Box className="popup-overlay">
      {showReadme && (
        <Draggable>
          <Box className="popup readme">
            <Box className="popup-header">
              <Typography>README.md</Typography>
              <Button className="close-button" onClick={() => setShowReadme(false)}>✕</Button>
            </Box>
            <Typography className='readme-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ipsa deserunt perferendis impedit, porro inventore quidem laboriosam hic laudantium consectetur harum excepturi et, vero cupiditate quae earum quisquam nesciunt veritatis!</Typography>
          </Box>
        </Draggable>
      )}
      {activePopups.map((meme, index) => (
        <Draggable key={index} handle=".drag-handle">
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
    </Box>
  );
}
