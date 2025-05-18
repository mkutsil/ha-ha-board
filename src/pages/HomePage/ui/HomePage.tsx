import { JokeList } from '@/entities/Joke';
import {  Container } from '@mui/material';
import WelcomeBlock from './components/WelcomeBlock/WelcomeBlock';

const HomePage = () => (
    <Container>
        <WelcomeBlock/>

        <JokeList />
    </Container>
);

export default HomePage;