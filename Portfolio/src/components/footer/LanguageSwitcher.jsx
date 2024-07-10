import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import ukFlag from "/assets/icons/uk-flag.svg";
import hungaryFlag from "/assets/icons/hungary-flag.svg";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        handleClose();
    };

    const currentLanguage = i18n.language;
    const flag = currentLanguage === 'en' ? ukFlag : hungaryFlag;
    const tooltipTitle = currentLanguage === 'en' ? 'ENG' : 'HUN';

    return (
        <Box style={{padding: 'none'}}>
            <Tooltip title={tooltipTitle} arrow>
                <IconButton onClick={handleClick} style={{padding: 0}}>
                    <img src={flag} alt={tooltipTitle} style={{ width: '2rem', height: 'auto' }} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                    '& .MuiPaper-root': {
                        border: "3px inset #fff",
                    }
                }}
            >
                <MenuItem onClick={() => changeLanguage('en')}>
                    <img src={ukFlag} alt="English" style={{ width: '2rem', height: 'auto', marginRight: '0.5rem' }} />
                    English
                </MenuItem>
                <MenuItem onClick={() => changeLanguage('hu')}>
                    <img src={hungaryFlag} alt="Hungarian" style={{ width: '2rem', height: 'auto', marginRight: '0.5rem' }} />
                    Magyar
                </MenuItem>
            </Menu>
        </Box>
    );
}