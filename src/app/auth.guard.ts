import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private rout:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("actic");
    
    if (localStorage.getItem('currentUser')!=undefined && localStorage.getItem("currentUser")!='undefined')  {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.rout.navigate(["/"]);
    return false;
}
}
