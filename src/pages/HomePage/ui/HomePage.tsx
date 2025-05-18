import { JokeList } from '@/entities/Joke';
import {  Container,  Typography } from '@mui/material';

const HomePage = () => (
    <Container>
        <Typography variant="h4" gutterBottom>
            Welcome to HaHaBoard
        </Typography>

        <JokeList />
    </Container>
);

export default HomePage;