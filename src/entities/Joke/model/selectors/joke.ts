import type { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getJokeList = (state: StateSchema) => state.jokes?.data;
export const getJokesError = (state: StateSchema) => state.jokes?.error;
export const getJokesIsLoading = (state: StateSchema) => state.jokes?.isLoading;