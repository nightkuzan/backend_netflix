export type ShowType = 'movie' | 'series';

export class Show {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  type: ShowType;
  genres: string[];
  releaseYear: number;
  rating: number;
  genreTranslations?: {
    [key: string]: {
      [genreName: string]: string;
    };
  };
  duration?: string;
  seasons?: number;
  language: string;
  translations?: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
  tag?: string;
}
