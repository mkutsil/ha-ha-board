import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const NotFoundPage = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const goHome = () => {
        window.location.href = '/';
    };
    
    return (
        <Container
            sx={{
                height: 'calc(100vh - 70px - 40px - 100px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
            }}>
                <Typography variant={matches? 'h1' : 'h2'}>
                    404
                </Typography>

                <Typography variant={matches? 'h3' : 'h4'}>
                    Page not found
                </Typography>
                <Button
                    size='large'
                    variant='contained'
                    onClick={goHome}
                >
                    Go home
                </Button>
            </Box> 
        </Container>
        
    );
};

export default NotFoundPage;
