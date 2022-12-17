import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { Game } from 'src/main';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})

export class GameDetailsComponent {

  // gameData=readGameData("firstGame");
  //  games: Game[] = [
  //    {
  //     name: this.gameData.name,
  //     picture: this.gameData.picture,
  //     description: this.gameData.description,
  //     genres: this.gameData.genres,
  //     rating: this.gameData.rating
  //    }
  // ];
  gameName: string;
  picture: string;
  description: string;
  genres: string
  rating: string;

  gameData=readGameData("firstGame");

  constructor() {
    this.gameName = readGameData("firstGame").name;
    this.picture = this.gameData.picture;
    this.description = this.gameData.description;
    this.genres= this.gameData.genres;
    this.rating= this.gameData.rating;
  }
  
}
const app = initializeApp(environment.firebase);
function readGameData (gameId:string)
{
  const db = getDatabase();
  const reference = ref(db, 'games/' + gameId);
  class Game
  {
    name!: string;
    picture!: string;
    description!: string;
    genres!: string;
    rating!: string;
  };
  var gameData: Game = new Game();
  onValue(reference, (snapshot) => 
  {
    const data = snapshot.val();
    gameData.name=data.name;
    gameData.picture=data.picture;
    gameData.description=data.description;
    gameData.genres=data.genres;
    gameData.rating=data.rating;
  });
  return gameData;
}
//console.log(readGameData("firstGame"));