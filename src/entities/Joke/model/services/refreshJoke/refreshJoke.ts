import { createAsyncThunk } from '@reduxjs/toolkit';
import { jokeActions } from '../../slice/jokeSlice';
import type { Joke } from '../../types/joke';
import type { RootState } from '@/app/providers/StoreProvider';
import { fetchRandomJoke } from '../fetchRandomJoke/fetchRandomJoke';

export const refreshJoke = createAsyncThunk<void, number, { state: RootState }>(
    'jokes/refreshJoke',
    async (jokeId, { dispatch, getState }) => {
        dispatch(jokeActions.setJokeIsLoading(jokeId));
        const jokesFromState = getState().jokes.data || [];

        let newJoke: Joke | null = null;

        while (true) {
            const res = await dispatch(fetchRandomJoke()).unwrap();

            const isDuplicate = jokesFromState.some(j => j.id === res.id);

            if (!isDuplicate) {
                newJoke = res;
                break;
            }
        }

        if (newJoke) {
            const updatedJokes = jokesFromState.map(j =>
                j.id === jokeId ? newJoke! : j
            );

            dispatch(jokeActions.setJokes(updatedJokes));
        }
    }
);
