import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token') ? true : false;

  if (isLoggedIn) {
    return true;
  }

  return inject(Router).createUrlTree(['']);
};

export const isLoginGuardGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token') ? true : false;

  if (!isLoggedIn) {
    return true;
  }

  return inject(Router).createUrlTree(['/chit-chat']);
};
