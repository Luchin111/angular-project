import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();


    const inputUsername = (document.getElementById('username') as HTMLInputElement).value;
    const inputPassword = (document.getElementById('password') as HTMLInputElement).value;


    if (inputUsername === 'admin' && inputPassword === 'admin') {
      localStorage.setItem('user', inputUsername);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
