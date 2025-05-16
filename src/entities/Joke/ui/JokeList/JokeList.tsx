import {  Grid, Box, Container, Button, Typography } from '@mui/material';
import JokeListItem from './components/JokeListItem/JokeListItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getJokeList, getJokesError, getJokesIsLoading } from '../../model/selectors/joke';
import { fetchTenJokes } from '../../model/services/fetchTenJokes/fetchTenJokes';
import { PageLoader } from '@/widgets/PageLoader';

export const JokeList = () => {

    const dispatch = useAppDispatch();

    const jokeList = useSelector(getJokeList);
    const jokesIsLoading = useSelector(getJokesIsLoading);
    const jokesError = useSelector(getJokesError);

    const onFetchTenJokes = () => {
        dispatch(fetchTenJokes());
    };

    useEffect(() => {
        onFetchTenJokes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(jokesIsLoading || !jokeList?.length){
        return (<PageLoader/>);
    }

    if(jokesError) {
        return (<Typography variant='h1'>Error</Typography>);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                {jokeList.map((joke) => (
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
                    onClick={onFetchTenJokes}
                >
                    Load more
                </Button>
            </Box>
        </Container>
    );};
