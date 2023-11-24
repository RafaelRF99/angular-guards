import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  tokenFicticio = 'abc123';

  constructor() {}

  handleLogin() {
    localStorage.setItem('token', this.tokenFicticio);
  }

  handleLogout() {
    localStorage.clear();
  }
}
