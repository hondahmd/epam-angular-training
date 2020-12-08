import { NameInterface } from './name-interface';

export interface UserInterface {
  id: string;
  name: string;
  password: string;
  token: string;
}

export interface BEUserInterface {
  id: number;
  fakeToken: string;
  name: NameInterface;
  login: string;
  password: string;
}
