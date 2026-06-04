import { inject } from '@angular/core/primitives/di';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service/auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if(authService.isLoggedIn()) {
    return true;
  }
 
  return router.createUrlTree(['/login']);
};
