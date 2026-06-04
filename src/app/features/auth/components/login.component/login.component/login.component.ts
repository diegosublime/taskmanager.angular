import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth.service/auth.service';

@Component({
  selector: 'app-login.component',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  
  
  login(){
    this.authService.login();
  }
}
