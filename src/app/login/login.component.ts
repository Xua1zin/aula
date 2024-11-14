import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponentComponent } from '../login-component/login-component.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, LoginComponentComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
}
