import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IGame } from "../shared/interfaces/game";


@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<IGame[]>;
  }

  getGame(id: string) {
    return this.http.get<IGame>('/api/games/' + id);
  }

  createGame(title: string, imageUrl: string, genres: string, description: string, rating: string, price: string) {
    return this.http.post<IGame>('/api/games/', {title, imageUrl, genres, description, rating, price });
  }

  deleteGame(id: string|undefined){
    return this.http.delete<any>(`/api/games/${id}`);
  }
}