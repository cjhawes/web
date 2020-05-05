import { Deserialisable } from './deserialisable.model';

export class ToDoList implements Deserialisable {
  id: number;
  name: string;
  description: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
