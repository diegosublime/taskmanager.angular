import { Injectable, signal } from '@angular/core'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Private signals
  private isAuthenticated = signal(false);

  //Public signals
  readonly isLoggedIn = this.isAuthenticated.asReadonly();
}
