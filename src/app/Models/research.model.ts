import { Deserialisable } from './deserialisable.model';

export class Research implements Deserialisable {
  id: number;
  title: string;
  synopsis: string;
  author: string;
  posted: Date;
  url: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
