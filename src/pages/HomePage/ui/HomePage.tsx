import { JokeList } from '@/entities/Joke';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Card, Container, Collapse, Box, Typography, Grid, ButtonGroup, Button } from '@mui/material';

interface JokeType {
    id: string;
    type: string;
    setup: string;
    punchline: string;
}

const mockJoke: JokeType = {
    id: '1',
    type: 'General',
    setup: 'Sint quidem et rerum odit placeat.',
    punchline: 'Similique eum incidunt ab tempore qui labore. Suscipit numquam dolor aspernatur. Aperiam in exercitationem. Eos quam tempore. Adipisci dolores quia.'
};

const mockJokeArray = new Array(10)
    .fill(0)
    .map((item, index) => ({
        ...mockJoke,
        id: String(index + item)
    }));

const HomePage = () => (
    <Container>
        <Typography variant="h4" gutterBottom>
            Welcome to HaHaBoard
        </Typography>

        <JokeList jokes={mockJokeArray} />
    </Container>
);

export default HomePage;