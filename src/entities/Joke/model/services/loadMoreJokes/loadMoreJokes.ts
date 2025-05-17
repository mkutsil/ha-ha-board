import { createAsyncThunk } from '@reduxjs/toolkit';
import { jokeActions } from '../../slice/jokeSlice';
import { fetchTenJokes } from '../fetchTenJokes/fetchTenJokes';
import type { Joke } from '../../types/joke';
import type { RootState } from '@/app/providers/StoreProvider';

export const loadMoreJokes = createAsyncThunk<void, void, { state: RootState }>(
    'jokes/loadMoreJokes',
    async (_, { dispatch, getState }) => {
        const jokesFromState = getState().jokes.data || [];
        const existingIds = new Set(jokesFromState.map(j => j.id));
    
        const newJokes: Joke[] = [];

        while (newJokes.length < 10) {
            const res = await dispatch(fetchTenJokes()).unwrap();

            // Фільтруємо тільки унікальні
            const unique = res.filter(j => !existingIds.has(j.id));

            // Додаємо до масиву результатів і оновлюємо existingIds
            for (const j of unique) {
                if (newJokes.length >= 10) break;
                existingIds.add(j.id);
                newJokes.push(j);
            }

            // Якщо нічого нового не отримали — зупиняємось, щоб не зациклитись
            if (unique.length === 0) break;
        }

        const result = [ ...jokesFromState, ...newJokes ];

        dispatch(jokeActions.setJokes(result));
    }
);
