import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {
  user: firebase.User;
  loggedIn: boolean;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.loggedIn = false;
  }

  authenticateUser() {
    if (!this.loggedIn && confirm('Press OK if you have an account!') === true) {
      const email = prompt('Enter your email:');
      const pass = prompt('Enter your password:');
      alert('You entered ' + email + ' and ' + pass);
      this.angularFireAuth.auth.signInWithEmailAndPassword(email, pass).then(data => data);
      this.user = firebase.auth().currentUser;
      if (this.user) {
        this.loggedIn = true;
      }
    } else {
      alert('Logged In!');
    }
  }

}
