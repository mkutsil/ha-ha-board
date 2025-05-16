import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { JokeSchema } from '../types/jokeSchema';
import { fetchTenJokes } from '../services/fetchTenJokes/fetchTenJokes';
import type { Joke } from '../types/joke';
import { fetchRandomJoke } from '../services/fetchRandomJoke/fetchRandomJoke';

const jokemock = { type:'general',setup:'What was the pumpkin’s favorite sport?',punchline:'Squash.',id:'263' };

const initialState: JokeSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const jokeSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        setJoke: (state, action: PayloadAction<boolean>) => {
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
            })
            .addCase(fetchRandomJoke.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchRandomJoke.fulfilled, (state, action: PayloadAction<Joke>) => {
                state.isLoading = false;
                state.data?.push(action.payload);
            })
            .addCase(fetchRandomJoke.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    }
});

export const { actions: jokeActions } = jokeSlice;
export const { reducer: jokeReducer } = jokeSlice;
