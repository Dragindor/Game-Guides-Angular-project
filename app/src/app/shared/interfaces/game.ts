import { IUser } from "./user";

export interface IGame {
  _id: string;
  title: string;
  imageUrl: string;
  _ownerId: IUser;
  genres: string;
  description: string;
  rating: string;
  price: string;
  created_on: string;
}
