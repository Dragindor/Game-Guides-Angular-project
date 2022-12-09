
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getDatabase, set, ref, update } from "firebase/database";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
  const database = getDatabase(app);
  const auth = getAuth();


export function Register(value:any){

  var email = value.email;
  var password = value.password;
  var username = value.username;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
          username: username,
          email: email,
          password: password
      })

      alert('user created!');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    // ..
    });

};

export function Login(value:any){

  var email = value.email;
  var password = value.password;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
         update(ref(database, 'users/' + user.uid),{
          last_login: dt,
        })

         alert('User loged in!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
  });

 };

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    //bla bla bla
    // ...
  } else {
    // User is signed out
    // ...
    //bla bla bla
  }
});

function LogOut(){

   signOut(auth).then(() => {
     // Sign-out successful.
     alert('user loged out');
   }).catch((error) => {
     // An error happened.
     const errorCode = error.code;
     const errorMessage = error.message;

        alert(errorMessage);
   });

};

export class AuthService {

}
