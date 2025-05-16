import type { Joke } from './joke';

export interface JokeSchema {
	isLoading: boolean;
	error?: string;
	data?: Joke[];
}