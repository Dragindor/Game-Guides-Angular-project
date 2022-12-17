import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(environment.firebase);

function writeUserData(userId: string, name: string, email: string, password: string)
{
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);

  set(reference, 
    {
      username: name,
      email: email,
      password: password
    });

}
export function readUser(userId:string)
{
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  class User
  {
    username!: string;
    email!: string;
    password!: string;
  };
  var userData = new User();
  onValue(reference, (snapshot) => 
  {
    const data = snapshot.val();
    userData.username=data.username;
    userData.email=data.email;
    userData.password=data.password;
  });
  return userData;
}

function writeGameData(gameId: string, name: string, picture: string, description: string, genres:string, rating:string)
{
  const db = getDatabase();
  const reference = ref(db, 'games/' + gameId);

  set(reference, 
    {
      name: name,
      picture: picture,
      description: description,
      genres: genres,
      rating: rating
    });

}

export function readGameData (gameId:string)
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
  var gameData = new Game();
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
export class Game
{
  name!: string;
  picture!: string;
  description!: string;
  genres!: string;
  rating!: string;
};
export default class Character {
  actor_name!: String;
  character_name!: String;
  gender!: String;
  status!: String;
}
export function readAllGameData()
{
  const db = getDatabase();
  //const gameData = query(ref(db, 'games'), orderByChild('rating'));
  const reference = ref(db, 'games/');
  class Game
  {
    name!: string;
    picture!: string;
    description!: string;
    genres!: string;
    rating!: string;
  };
  
  var gameData: any;
  onValue(reference, (snapshot) => 
  {
    const data = snapshot.val()
    .forEach((element: { name: string; picture: string; description: string; genres: string; rating: string; }) => {
      
      var game = new Game();
      game.name=element.name;
      game.picture=element.picture;
      game.description=element.description;
      game.genres=element.genres;
      game.rating=element.rating;
      gameData.Add(game);
    });
  });
  // onValue(reference, (snapshot) => 
  // {
  //   snapshot.forEach((childSnapshot) => {
  //     var game = new Game();
  //     const data = childSnapshot.val();
  //     game.name=data.name;
  //     game.picture=data.picture;
  //     game.description=data.description;
  //     game.genres=data.genres;
  //     game.rating=data.rating;
  //     gameData.Add(game);    
  //   });
      
  // });
  return gameData;
}

//writeUserData("DragId", "Drag", "Drag2001@gmail.com", "123456789")
//console.log(readUser("MikuId"));
//writeGameData("secondGame","God of War", "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1650554420", "Great Game(description)", "Open world, Adventure", "10")
//console.log(readGameData("firstGame"));
//console.log(readAllGameData);