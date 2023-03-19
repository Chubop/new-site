import { Box, Typography, Button, Grid } from "@mui/material";
import { useWindowSize } from "@react-hook/window-size";


function Keyword(props){
    return(
        <>
            <Button
            disabled
            sx={{
                border: '1px solid gray',
                color: 'black !important',
                textTransform: 'none',
                backgroundColor: '#fff',
                padding: 0,
                paddingLeft: 2,
                paddingRight: 2,
                marginRight: 3,
                marginBottom: 1,
                marginTop: 1
            }}>
                <Typography variant="h7">
                    {props.children}
                </Typography>
            </Button>
        </>
    )
}

export default function ExperienceCard(props){
    const [width, height] = useWindowSize();
    return(
        <div>
            <Box sx={{width: width >= 1000 ?'60vw':'80vw', marginBottom: 8, 
            backgroundImage: "linear-gradient(to bottom, pink, #ffb3bf)", padding: 6, borderRadius: '10px', border: '1px solid white'}}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="h5" sx={{marginBottom: 1}}>{props.setting}, {props.timeframe}</Typography>
                <Grid container justifyContent="flex-start" sx={{marginTop: 1, marginBottom: 1}}>
                    {width >= 1000 && props.keywords.map(word => {
                        return(
                            <Grid item>
                                <Keyword>{word}</Keyword>
                            </Grid>
                        )
                    })}
                </Grid>
                <Typography variant="h6">{props.description}</Typography>
                {props.children}
            </Box>
            <Box>
            </Box>
        </div>
    )

}
