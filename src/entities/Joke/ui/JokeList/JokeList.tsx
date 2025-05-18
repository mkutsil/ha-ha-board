import {  Grid, Box, Container, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import JokeListItem from './components/JokeListItem/JokeListItem';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getJokeList, getJokesError, getJokesIsLoading } from '../../model/selectors/joke';
import { initializeJokes } from '../../model/services/initializeJokes/initializeJokes';
import { jokeActions } from '../../model/slice/jokeSlice';
import { loadMoreJokes } from '../../model/services/loadMoreJokes/loadMoreJokes';
import { refreshJoke } from '../../model/services/refreshJoke/refreshJoke';
import JokeListItemSkeleton from './components/JokeListItemSkeleton/JokeListItemSkeleton';
import { SnackbarAlertVariant, useSnackbar } from '@/app/providers/SnackbarProvider';

export const JokeList = () => {
    const { showSnackbar } = useSnackbar();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const dispatch = useAppDispatch();

    const jokeList = useSelector(getJokeList);
    const jokesIsLoading = useSelector(getJokesIsLoading);
    const jokesError = useSelector(getJokesError);

    const onLoadMoreJokes = () => {
        dispatch(loadMoreJokes());
    };

    useEffect(() => {
        dispatch(initializeJokes());

        return () => {
            dispatch(jokeActions.clearJokes());
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(jokesError) {
        return (<Typography variant='h1'>Error</Typography>);
    }

    const onToggleSave = (id: number, isSaved: boolean | undefined) => () => {
        dispatch(jokeActions.setSaveJoke(id));
        showSnackbar(
            isSaved ? 
                'You have successfully deleted the joke from the saved!' :
                'You have successfully added the joke in the saved!', 
            SnackbarAlertVariant.SUCCESS);
    };

    const onRefresh = ( id: number) => () => {
        dispatch(refreshJoke(id));
    };

    const renderTenSkeletons = () => new Array(10)
        .fill('')
        .map((_, index) => (
            <JokeListItemSkeleton key={index} />
        ));

    return (
        <Container>
            <Grid container spacing={2} justifyContent={matches? 'flex-start' : 'center'}>
                {jokesIsLoading && !jokeList?.length ? 
                    renderTenSkeletons()
                    :
                    !!jokeList?.length && jokeList.map((joke) => (
                        <JokeListItem 
                            key={joke.id}
                            id={joke.id}
                            type={joke.type}
                            setup={joke.setup}
                            punchline={joke.punchline}
                            isSaved={joke.isSaved}
                            isLoading={joke.isLoading}
                            onToggleSave={onToggleSave(joke.id, joke.isSaved)}
                            onRefresh={onRefresh(joke.id)}
                            matches={matches}
                        />
                    ))    
                }

                {jokesIsLoading && !!jokeList?.length &&
                    renderTenSkeletons()
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
                    onClick={onLoadMoreJokes}
                    disabled={jokesIsLoading}
                >
                    Load more
                </Button>
            </Box>
        </Container>
    );
};
