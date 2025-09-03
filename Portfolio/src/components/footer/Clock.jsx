import { Typography } from '@mui/material';
import { bodyFontSizes } from "../../styles/typography";
import { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();

            if (h === 0) {
                h = 24;
            }

            if (h > 24) {
                h = h - 24;
            }

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            const currentTime = h + ":" + m + ":" + s + " ";
            setTime(currentTime);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Typography variant='h6' fontFamily="var(--secondary-font)" sx={{ fontSize: bodyFontSizes }}>
            {time}
        </Typography>
    );
}
