import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'sse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = environment.content.websiteTitle;

  constructor(public angularFireAuth: AngularFireAuth) { }

  // regAuth(event) {
  //   this.angularFireAuth.auth
  //     .signInWithEmailAndPassword('hpwebmaster47@gmail.com', 'P@ssword!')
  //     .then(data => console.log(data));

  //   let user = firebase.auth().currentUser;
  //   // user.sendEmailVerification();

  //   user.updateProfile({displayName: 'Hunter Parks', photoURL: '1'});

  //   console.log(user);

      // oobCode

    // this.angularFireAuth.auth.applyActionCode()
  // }

}
