import { Injectable } from '@nestjs/common';
import { Show } from 'src/domain/entities/show.entity';
import axios from 'axios';

@Injectable()
export class ShowService {
  async getAll(): Promise<Show[]> {
    const response = await axios.get('https://api.tvmaze.com/shows');

    return [
      {
        id: '1',
        title: 'The Dark Knight',
        description:
          'Batman faces a new enemy, the Joker, who is causing havoc in Gotham City.',
        posterUrl:
          'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        backdropUrl:
          'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        type: 'movie',
        genres: ['Action', 'Crime', 'Drama'],
        releaseYear: 2008,
        rating: 9.0,
        duration: '2h 32m',
        language: 'en',
        translations: {
          es: {
            title: 'El Caballero Oscuro',
            description:
              'Batman se enfrenta a un nuevo enemigo, el Joker, que está causando estragos en Ciudad Gotham.',
          },
          fr: {
            title: 'Le Chevalier Noir',
            description:
              'Batman affronte un nouvel ennemi, le Joker, qui sème le chaos à Gotham City.',
          },
        },
      },
    ];
  }

  //   async getById(id: string): Promise<Show | null> {
  //     return this.showRepository.findById(id);
  //   }
}
