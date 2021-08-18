import { LocalstorageService } from './localstorage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(
    private router: Router,
    private localstorageService: LocalstorageService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const token = this.localstorageService.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      console.log(tokenDecode);
      if (!tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
        return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  private _tokenExpired(expiration): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration;
  }
}
