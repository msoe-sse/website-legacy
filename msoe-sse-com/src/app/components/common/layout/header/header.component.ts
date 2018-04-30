import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HeaderSettings } from './header.settings';
import { HeaderLinkSet } from '../../../../models/common/layout/header/header-links.model';
import { FirebaseService } from '../../../../services/firebase/firebase.service';
import * as firebase from 'firebase/app';
import { AuthenticationService } from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'sse-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string;
  headerLinks: HeaderLinkSet[];
  user: firebase.User;

  constructor(
    public authenticationService: AuthenticationService,
    private firebaseService: FirebaseService) {
    this.title = environment.content.websiteTitle;
    this.headerLinks = HeaderSettings.headerLinks;
    this.authenticationService.user$.subscribe(user => {
      this.user = user;
    });
  }
}
