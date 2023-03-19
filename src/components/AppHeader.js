import { AppBar, Box, Button, Toolbar } from "@mui/material";

function AppHeader(props) {

    return (
        <AppBar elevation={0} component="nav" sx={{ textAlign: 'right', background: 'transparent' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {['Experience', 'Projects', 'Blog'].map((item) => (
                <Button 
                onClick={() => props.handleOpen(item.toLocaleLowerCase())}
                key={item} sx={{ color: '#fff', borderRadius: '5px', mx: 1, '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.3)' } }}>
                    {item}
                </Button>
            ))}
            </Box>
        </Toolbar>
        </AppBar>
    );
}

export default AppHeader;
