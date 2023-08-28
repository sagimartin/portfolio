import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let session = "AM";

            if (h === 0) {
                h = 12;
            }

            if (h > 12) {
                h = h - 12;
                session = "PM";
            }

            h = (h < 10) ? "0" + h : h;
            m = (m < 10) ? "0" + m : m;
            s = (s < 10) ? "0" + s : s;

            const currentTime = h + ":" + m + ":" + s + " " + session;
            setTime(currentTime);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Typography variant='h6' fontFamily="var(--secondary-font)" sx={{
            fontSize: {
                xs: '1rem',
                sm: '1.2rem',
                md: '1.5rem',
                lg: '1.5rem',
                xl: '1.8rem',
            },
        }}>
            {time}
        </Typography>
    );
}
