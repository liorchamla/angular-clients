import * as firebase from 'firebase';

const fireApp = firebase.initializeApp({
  apiKey: "AIzaSyAQnkHAsKBKhSAT4AfuFdZp7_Iv2E9_yoI",
  authDomain: "boite-a-recettes-4232d.firebaseapp.com",
});

export class AuthService {
  token: string;

  signupUser(email: string, password: string){
    return fireApp.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email:string, password:string){
    return fireApp.auth().signInWithEmailAndPassword(email, password).then(response => {
      fireApp.auth().currentUser.getToken().then(token => this.token = token)
    });
  }

  getToken(){
    firebase.auth().currentUser.getToken().then(token => this.token = token);
    return this.token;
  }
}
