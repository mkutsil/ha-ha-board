import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Joke } from '../../types/joke';

export const fetchRandomJoke = createAsyncThunk<Joke>(
    'jokes/fetchRandomJoke',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('https://official-joke-api.appspot.com/jokes/random');
            if (!res.ok) throw new Error('Failed to fetch joke');
            return await res.json();
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);
