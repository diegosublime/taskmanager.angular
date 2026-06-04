import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu.component/menu.component';
import { AuthService } from './shared/services/auth.service/auth.service'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit { 
  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.checkAuth();
  }
}
