import { Box, Button } from '@mui/material';
import { useLottie } from 'lottie-react';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';
import useWindowSize from '../hooks/useWindowSize';


function MovingImage({ 
    src,
    start,
    offset, 
    sm, 
    md, 
    lg, 
    height,
    speed,
    scale,
    isLottie,
    isFrozen }) {
    
    const lottieOptions = {
        animationData: src,
        loop: true,
        height: 30
    };
    const {View} = useLottie(lottieOptions)
    const mousePos = useMousePosition();
    const [xPos, setXPos] = useState(0);
    const imgHeight = height ? height : sm && 200 || md && 300 || lg && 400;
    const imgScale = !scale ? 0 : scale
    const ref = useRef(null);

    const MOVE_RATE = 
    speed ? speed == 'sm' && 0.1 || 
    speed == 'md' && 0.2 || 
    speed == 'lg' && 0.3
    :
    sm && 0.1 || 
    md && 0.2 || 
    lg && 0.25 ||
    isFrozen && 0;

    const x = mousePos.x; const y = mousePos.y;

    const [right, setRight] = useState(start);

    useLayoutEffect(() => {
        let currXPos = ref.current.getBoundingClientRect().x;
        setXPos(currXPos);
    });

    useEffect(() => {
        // if right gets too high, send back to 0
        if(xPos < 0 - (ref.current.width * 2)){
            setRight(-300 - ref.current.width);
        }
    }, [right, MOVE_RATE]);

    useEffect(() => {
        // else, continue to add to the right value
        const interval = setInterval(() => {
            setRight(right + MOVE_RATE * 1)
        }, 5);
        return () => clearInterval(interval);
    }, [xPos, MOVE_RATE]);


    if(isLottie){
        return(
            <Box 
            ref={ref}
            position="relative" style={{
                position: 'absolute',
                right: (right),
                top: 250 + (y / 50) + offset,
                height: imgHeight * (imgScale + 1)
            }}>
                {isLottie && 
                <div style={{height: 'inherit', width: 100}}>
                    {View}
                </div>}
            </Box>
        )
    }
    return (
        <Box position="relative" style={{
            position: 'absolute',
            right: (right),
            top: 250 + (y / 50) + offset
        }}>
            {/* <a style={{color: sm && 'yellow' || md && 'orange' || lg && 'red'}}>
                {Math.round(xPos)}
            </a> */}
            <img src={src} 
            style={{height: imgHeight * (imgScale + 1)}}
            alt="Moving Image" 
            ref={ref}
            />
        </Box>
    );
}

export default MovingImage;
