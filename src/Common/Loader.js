import React from 'react';
import "../Assets/CSS/Loader/Loader.css";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {createTheme, ThemeProvider, useTheme} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#000000',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});


function LinearDeterminate() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
            <LinearProgress color="primary" variant="determinate" value={progress} />
        </Box>
        </ThemeProvider>
    );
}


const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <img
                src={require("../Assets/Loader Assets/Logo Loader 2.png")}
                alt="Logo loader"
                className="loading-logo"
            />
            <div className="loading-bar">  <LinearDeterminate/></div>
        </div>
    );
};

export default LoadingScreen;