import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Automobiles';
  constructor(public authService: AuthenticationService) {}

  login(username: string, password: string): void {
    if (this.authService.login(username, password)) {
      // Navigate to authenticated route or perform necessary actions
      console.log('Login successful');
    } else {
      console.log('Invalid credentials');
    }
  }

  logout(): void {
    this.authService.logout();
    // Navigate to login page or perform necessary actions
    console.log('Logged out');
  }
  isDarkTheme: boolean = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
