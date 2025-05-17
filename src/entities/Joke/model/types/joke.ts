export interface Joke {
	id: number;
  type: string;
  setup: string;
  punchline: string;
  isSaved?: boolean;
  isLoading?: boolean;
}