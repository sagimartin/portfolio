import { Box } from '@mui/material';

const inlineStyles = {
  layerPopupContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
};

export default function LayerPopup({ children }) {
  return (
    <Box style={inlineStyles.layerPopupContainer}>
      {children}
    </Box>
  );
}
