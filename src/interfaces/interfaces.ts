export interface Person {
  id: string;
  name: string;
  age: number;
}

export interface User extends Person {
  kids: Person[];
}
