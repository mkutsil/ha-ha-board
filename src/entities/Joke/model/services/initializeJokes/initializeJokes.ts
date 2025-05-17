// services/initializeJokes.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { jokeActions } from '../../slice/jokeSlice';
import { fetchTenJokes } from '../fetchTenJokes/fetchTenJokes';
import type { Joke } from '../../types/joke';
import type { RootState } from '@/app/providers/StoreProvider';
import { getSavedJokes } from '../../lib/localStorageHelpers';

export const initializeJokes = createAsyncThunk<void, void, { state: RootState }>(
    'jokes/initialize',
    async (_, { dispatch }) => {
        const jokesFromStorage = getSavedJokes();

        // ✅ Якщо вже є 10+ жартів — просто використати їх
        if (jokesFromStorage.length >= 10) {
            dispatch(jokeActions.setJokes(jokesFromStorage.slice(0, 10)));
            return;
        }

        // 🔄 Якщо менше — дозавантажуємо унікальні
        const existingIds = new Set(jokesFromStorage.map(j => j.id));
        const result: Joke[] = [ ...jokesFromStorage ];

        while (result.length < 10) {
            const res = await dispatch(fetchTenJokes()).unwrap();
            const unique = res.filter(j => !existingIds.has(j.id));

            unique.forEach(j => {
                existingIds.add(j.id);
                result.push(j);
            });

            if (unique.length === 0) break; // safety net
        }

        const finalJokes = result.slice(0, 10);
        dispatch(jokeActions.setJokes(finalJokes));
        // localStorage.setItem('jokes', JSON.stringify(finalJokes));
    }
);