import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Joke } from '../../types/joke';

export const fetchTenJokes = createAsyncThunk<Joke[]>(
    'jokes/fetchTen',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('https://official-joke-api.appspot.com/jokes/ten');
            if (!res.ok) throw new Error('Failed to fetch jokes');
            return await res.json();
        } catch (error) {
            return thunkAPI.rejectWithValue((error as Error).message);
        }
    }
);
