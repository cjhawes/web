import { Deserialisable } from './deserialisable.model';

export class Image implements Deserialisable {
  imageId: number;
  imageUrl: string;
  imageTitle: string;
  imageDescription: string;
  imageUploaded: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
