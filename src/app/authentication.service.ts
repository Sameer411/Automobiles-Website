import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  private isLoggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    // Simulate authentication process (static)
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Simulate logout process (static)
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}