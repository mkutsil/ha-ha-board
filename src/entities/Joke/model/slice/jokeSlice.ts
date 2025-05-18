import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { JokeSchema } from '../types/jokeSchema';
import { fetchTenJokes } from '../services/fetchTenJokes/fetchTenJokes';
import type { Joke } from '../types/joke';
import { addJokeToStorage, removeJokeFromStorage } from '../lib/localStorageHelpers';

const initialState: JokeSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const jokeSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        setJokes: (state, action: PayloadAction<Joke[]>) => {
            state.data = action.payload;
        },
        setSaveJoke: (state, action: PayloadAction<number>) => {
            const joke = state?.data?.find(item => item.id === action.payload);
            if (joke) {
                joke.isSaved = !joke.isSaved;

                if (joke.isSaved) {
                    addJokeToStorage(JSON.parse(JSON.stringify(joke)));
                } else {
                    removeJokeFromStorage(joke.id);
                }
            }
        },
        setJokeIsLoading: (state, action: PayloadAction<number>) => {
            const joke = state?.data?.find(item => item.id === action.payload);
            if(joke) joke.isLoading = true;
        },
        clearJokes: (state) => {
            state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTenJokes.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTenJokes.fulfilled, (state, action: PayloadAction<Joke[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTenJokes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
});

export const { actions: jokeActions } = jokeSlice;
export const { reducer: jokeReducer } = jokeSlice;
