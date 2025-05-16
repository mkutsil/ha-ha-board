import { Container, CircularProgress } from '@mui/material';

export const PageLoader = () => (
    <Container 
        sx={{
            width: '100%',
            height: 'calc(100vh - 70px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <CircularProgress size={150}/>
    </Container>
    
);