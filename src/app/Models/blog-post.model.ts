import { Deserialisable } from './deserialisable.model';

export class BlogPost implements Deserialisable {
  id: number;
  title: string;
  body: string;
  author: string;
  posted: Date;
  imageId: number;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
