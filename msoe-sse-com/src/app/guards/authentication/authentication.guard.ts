import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../../services/authentication/authentication.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  canActivate(): Observable<boolean> {
    return this.authenticationService.user$
      .map(user => {
        if (user && user.uid) {
          console.log(user);
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      });
  }
}
