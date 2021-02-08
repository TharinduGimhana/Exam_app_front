import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../admin-service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(public adminService: AdminService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.adminService.isAuthenticated()) {
      return true;
    }

    return false;

  }


}
