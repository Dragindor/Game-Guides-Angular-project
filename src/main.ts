import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, update } from "firebase/database";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZN7Ugwnhcc2OI329MKoUCg6k5j8jwRzc",
  authDomain: "game-guides-eac29.firebaseapp.com",
  databaseURL: "https://game-guides-eac29-default-rtdb.firebaseio.com",
  projectId: "game-guides-eac29",
  storageBucket: "game-guides-eac29.appspot.com",
  messagingSenderId: "859159014551",
  appId: "1:859159014551:web:4c4b5e38ecbd6092ec8dd2",
  measurementId: "G-XW808GHJYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
function readUser(userId:string)
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
//writeUserData("MikuId", "Miki", "Miki2000@gmail.com", "123456789")
//console.log(readUser("MikuId"));
writeGameData("firstGame","Elden ring", "https://stevivor.com/wp-content/uploads/2022/02/elden-ring-990x556.jpg", "Great Game", "Open world, Adventure, Multiplayer", "10")