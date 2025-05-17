import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { JokeSchema } from '../types/jokeSchema';
import { fetchTenJokes } from '../services/fetchTenJokes/fetchTenJokes';
import type { Joke } from '../types/joke';
import { fetchRandomJoke } from '../services/fetchRandomJoke/fetchRandomJoke';
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
        setJoke: (state, action: PayloadAction<Joke>) => {
            state.data = state?.data?.map(joke => {
                if(joke.id === action.payload.id){
                    return action.payload;
                }
                return joke;
            });
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
        }
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
        // .addCase(fetchRandomJoke.pending, (state) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        // })
        // .addCase(fetchRandomJoke.fulfilled, (state, action: PayloadAction<Joke>) => {
        //     state.isLoading = false;
        //     state.data?.push(action.payload);
        // })
        // .addCase(fetchRandomJoke.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload as string;
        // });
    }
});

export const { actions: jokeActions } = jokeSlice;
export const { reducer: jokeReducer } = jokeSlice;
