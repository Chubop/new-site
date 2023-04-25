import { Box, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import AppHeader from '../components/AppHeader';
import LoadingScreen from '../components/LoadingScreen';
import MovingImage from '../components/MovingImage';
import PageModal from '../components/PageModal';
import groundOne from '../images/ground1.png';
import groundTwo from '../images/ground2.png';
import log from '../images/log.png';
import snowbg from '../images/snow-background.png';
import snowFox from '../images/snow_fox.json';
import tree from '../images/tree.png';
import tree2 from '../images/tree2.png';
import tree3 from '../images/tree3.png';
import Experience from '../modals/Experience';
import Projects from '../modals/Projects';

export default function Home(props){

    const [loaded, setLoaded] = useState(false);
    const [open, setOpen] = useState(false);
    const [currModal, setCurrModal] = useState();

    const handleClose = () => setOpen(false);

    const modals = {
        'experience': <Experience/>,
        'projects': <Projects/>
    }

    const handleClick = (modal) => {
        setCurrModal(modals[modal]);
        setOpen(true);
    }

    const SNOWFLAKE_COUNT = 60;
    // play wind howl sound effect
    new Audio('../sounds/wind_howl.mp3').play();

    useEffect(() => {
        const images = document.querySelectorAll('img');
        const promises = [];
    
        images.forEach((image) => {
          promises.push(
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = image.src;
              img.onload = resolve;
              img.onerror = reject;
            })
          );
        });
    
        Promise.all(promises)
          .then(() => {
            setLoaded(true);
          })
          .catch((err) => {
            console.error('Error loading images: ', err);
          });
      }, []);

    return(
        <div style={{overflow: 'hidden'}}>
            <LoadingScreen loaded={loaded}/>
            <PageModal open={open} handleClose={handleClose}>
                {currModal}
            </PageModal>
            {/* title and burger menu */}
            <Box width={'100%'} height={'100%'}
            sx={{
                position: 'absolute',
                top: 0,
                left: 0
            }}>
                <Grid container direction={'column'} justifyItems={'center'}>
                    {/* app bar */}
                    <Grid item>
                        <AppHeader handleOpen={handleClick} handleClose={handleClose}/>
                    </Grid>
                    <Grid item>
                        <Typography variant='h1' sx={{
                            fontWeight: 600, color: '#e0eaee', marginTop: '6vh', textAlign: 'center'}}>
                            Sam Kirby
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4' 
                        className='magic'
                        sx={{textAlign: 'center', marginTop: -2}}>
                            Creative Technologist
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            {/* background */}
                            {/* front layer */}
                {/* <MovingImage src={tree} start={1500} offset={0} scale={0.05} lg/>
                <MovingImage src={tree2} start={500} offset={0} scale={0.03} lg/>
                <MovingImage src={tree} start={0} offset={10} lg/> */}
                <Snowfall color='#e3e3e3' snowflakeCount={SNOWFLAKE_COUNT}/>
            <Box>
                {/* <MovingImage src={groundTwo} offset={225} isFrozen/> */}
            </Box>
            <Box sx={{width: '100%', height: '100%'}}>
                <img src={snowbg} style={{width: 'auto', maxWidth: '100%'}}/>
            </Box>
        </div>
    )
}