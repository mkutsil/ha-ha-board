import {  Grid, Box, Container, Button, Typography, Snackbar, type SnackbarCloseReason, Alert, Fade } from '@mui/material';
import JokeListItem from './components/JokeListItem/JokeListItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect, useState, type SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { getJokeList, getJokesError, getJokesIsLoading } from '../../model/selectors/joke';
import { initializeJokes } from '../../model/services/initializeJokes/initializeJokes';
import { jokeActions } from '../../model/slice/jokeSlice';
import { loadMoreJokes } from '../../model/services/loadMoreJokes/loadMoreJokes';
import { refreshJoke } from '../../model/services/refreshJoke/refreshJoke';
import JokeListItemSkeleton from './components/JokeListItemSkeleton/JokeListItemSkeleton';

export const JokeList = () => {
    const [ open, setOpen ] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const dispatch = useAppDispatch();

    const jokeList = useSelector(getJokeList);
    const jokesIsLoading = useSelector(getJokesIsLoading);
    const jokesError = useSelector(getJokesError);

    const onFetchTenJokes = () => {
        dispatch(loadMoreJokes());
    };

    useEffect(() => {
        dispatch(initializeJokes());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(jokesError) {
        return (<Typography variant='h1'>Error</Typography>);
    }

    const onSaveJoke = (id: number) => {
        dispatch(jokeActions.setSaveJoke(id));
        handleClick();
    };

    const onRefresh = ( id: number) => {
        dispatch(refreshJoke(id));
    };

    return (
        <Container>
            <Snackbar 
                open={open} 
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                autoHideDuration={5000} 
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    This is a success Alert inside a Snackbar!
                </Alert>
            </Snackbar>
           
            <Grid container spacing={2}>
                {jokesIsLoading && !jokeList?.length ? 
                    new Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <JokeListItemSkeleton key={index} />
                        ))
                    :
                    jokeList?.length && jokeList.map((joke) => (
                        <JokeListItem 
                            key={joke.id}
                            id={joke.id}
                            type={joke.type}
                            setup={joke.setup}
                            punchline={joke.punchline}
                            isSaved={joke.isSaved}
                            isLoading={joke.isLoading}
                            onSaveJoke={onSaveJoke}
                            onRefresh={onRefresh}
                        />
                    ))    
                }

                {jokesIsLoading && jokeList?.length &&
                    new Array(10)
                        .fill(0)
                        .map((_, index) => (
                            <JokeListItemSkeleton key={index} />
                        ))
                }
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
                    disabled={jokesIsLoading}
                >
                    Load more
                </Button>
            </Box>
        </Container>
    );};
