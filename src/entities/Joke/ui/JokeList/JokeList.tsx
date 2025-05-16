import {  Grid, Box, Container, Button } from '@mui/material';
import type { Joke } from '../../model/types/joke';
import JokeListItem from './components/JokeListItem/JokeListItem';

interface JokeListProps {
	jokes: Joke[];
}

export const JokeList = (props: JokeListProps) => {

    const { jokes } = props;

    return (
        <Container>
            <Grid container spacing={2}>
                {jokes.map((joke) => (
                    <JokeListItem 
                        key={joke.id}
								 				id={joke.id}
                        type={joke.type}
                        setup={joke.setup}
                        punchline={joke.punchline}
                    />
                ))}
            </Grid>

            <Box 
                sx={{
                    width: 'max-content',
                    margin: '50px auto'
                }}
            >
                <Button
                    variant='contained'
                    size='large'
                >
                    Load more
                </Button>
            </Box>
        </Container>
    );};
