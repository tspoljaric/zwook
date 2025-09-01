import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  passwordConfirmation: string = '';

  errorMessage: string | null = null;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/dashboard']);
  }

}
