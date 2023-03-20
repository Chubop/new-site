import { useState, useEffect, useRef } from 'react';
import { Box, Grid, Typography } from '@mui/material';

function LoadingScreen(props) {
  const [dots, setDots] = useState('');
  const [opacity, setOpacity] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        const currentOpacity = window.getComputedStyle(ref.current).getPropertyValue('opacity');
        console.log(currentOpacity)
        setOpacity(currentOpacity);
  
        if (currentOpacity === '0') {
          clearInterval(interval);
        }
      }
    }, 500);
  
    return () => clearInterval(interval);
  }, [ref]);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(dots => {
        if (dots.length === 3) {
          return '';
        } else {
          return dots + '.';
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: opacity < 0.01 ? -999 : 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: props.loaded ? 0 : 1,
        transition: 'opacity 2s ease-in-out',
      }}
    >
      <Grid item>
        <Typography variant="h2" color="#fff" sx={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Arial' }}>
          loading{dots}
        </Typography>
      </Grid>
    </Box>
  );
}

export default LoadingScreen;
