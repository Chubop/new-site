import { Box, Typography } from "@mui/material"
import { useWindowSize } from "@react-hook/window-size";
import ProjectImage from "./CardImage"


export default function ProjectCard(props){
    
    const [width, height] = useWindowSize();

    return(
        <>
            <Box sx={{width: width < 1300 ? '80vw' : '50vw', paddingBottom: 1, marginBottom: 8, backgroundImage: "linear-gradient(to bottom, #ffb3bf, #eda1ad)", borderRadius: '10px', border: '1px solid white'}}>
                <ProjectImage src={props.src}/>
                <Typography variant={width < 1300 ? 'h5' : 'h4'} sx={{padding: 4, paddingBottom: 0, paddingTop: 3, color: 'white', fontWeight: 'bold'}}>
                    {props.title}
                </Typography>
                <Typography variant="h6" sx={{padding: 4, color: 'white', paddingTop: 2}}>
                    {props.children}
                </Typography>
            </Box>
        </>
    )
}