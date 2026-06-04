import { inject, Injectable, signal } from '@angular/core'; 
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { customAuthConfig } from '../../../auth/auth.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private oidcSecurityService = inject(OidcSecurityService);

  //Private signals
  private isAuthenticated = signal(false);
  private userData = signal(null);

  //Public signals
  readonly isLoggedIn = this.isAuthenticated.asReadonly();
  readonly getUserData = this.userData.asReadonly();

  checkAuth(){
      this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      this.isAuthenticated.set(isAuthenticated);
      this.userData.set(userData);
    });
  }

  login(){
    // redirects to the identity provider to sign in
    this.oidcSecurityService.authorize();
  }

  logout(){
    // redirects to the identity provider to sign out 
    // this.oidcSecurityService.logoff(); <= this does not work with cognito, 
    // so we will do it manually by redirecting to the logout endpoint of cognito and clearing the session storage before that. 
 
    // Clears tokens
    this.oidcSecurityService.logoffLocal();
    // Clear session storage
    if (window.sessionStorage) {
      window.sessionStorage.clear();
    }
    // Clear local storage
    if(localStorage) {
      localStorage.clear();
    } 
    // Redirect to the logout endpoint of cognito
    window.location.href = customAuthConfig.amazonCognitoLogoutUrl; 
  }
  
}
