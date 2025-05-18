import type { Joke } from '../types/joke';

const STORAGE_KEY = 'jokes';

const isJoke = (obj: unknown): obj is Joke => (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    typeof obj.id === 'number' &&
    'type' in obj &&
    typeof obj.type === 'string' &&
    'setup' in obj &&
    typeof obj.setup === 'string' &&
    'punchline' in obj &&
    typeof obj.punchline === 'string'
);

export const getSavedJokes = (): Joke[] => {
    const stored = localStorage.getItem('jokes');
    try {
        const parsed = JSON.parse(stored ?? '[]');
        if (Array.isArray(parsed)) {
            return parsed.filter(isJoke);
        }
    } catch {
        console.warn('Failed to parse jokes from localStorage');
    }
    return [];
};

export const addJokeToStorage = (joke: Joke) => {
    const jokes = getSavedJokes();
    if (!jokes.some(saved => saved.id === joke.id)) {
        jokes.push(joke);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(jokes));
    }
};

export const removeJokeFromStorage = (jokeId: number) => {
    const jokes = getSavedJokes().filter(joke => joke.id !== jokeId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jokes));
};
