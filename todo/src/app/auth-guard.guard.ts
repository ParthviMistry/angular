import { CanActivateFn } from '@angular/router';
import { TodoService } from './todo-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  if (TodoService) {
    return true;
  } else {
    return false;
  }
};

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { TodoService } from './todo-service.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class authGuardGuard implements CanActivateFn {
//   constructor(private authService: TodoService) {}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (this.authService.isAuthenticate) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
