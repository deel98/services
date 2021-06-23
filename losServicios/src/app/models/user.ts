import { Address } from './addres';

export class User {
  id!: number;
  name!: string;
  email!: string;
  username!: string;
  address!: Address;
  lat!: number;
}
