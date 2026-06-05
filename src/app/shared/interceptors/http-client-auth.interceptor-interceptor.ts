import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core/primitives/di';
import { AuthService } from '../services/auth.service/auth.service';

export const httpClientAuthInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const authService = inject(AuthService);

  authService.getAccessToken().subscribe((token) => {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }); 
  });

  return next(req); 
};
