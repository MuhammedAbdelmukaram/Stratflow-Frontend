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
        const startTime = Date.now();
        const interval = 10; // Update every 10ms
        const totalTime = 2500; // Total time in ms

        const timer = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const newProgress = (elapsedTime / totalTime) * 100;
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(timer);
            }
        }, interval);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <LinearProgress color="primary" variant="determinate" value={progress} />
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
