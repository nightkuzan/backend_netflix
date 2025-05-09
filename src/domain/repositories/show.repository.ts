import { Show } from '../entities/show.entity';

export abstract class ShowRepository {
  abstract findAll(): Promise<Show[]>;
  // findById(id: string): Promise<Show | null>;
}
