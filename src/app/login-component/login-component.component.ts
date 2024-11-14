import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss',
})
export class LoginComponentComponent {
  usuario: string = '';
  senha: string = '';
  
  constructor(private router: Router, private authService: AuthService) {}

  logar() {
    const usuarios = this.authService.getUsuarios();
    
    for (let i = 0; i < usuarios.length; i++) {
      if (
        this.usuario == usuarios[i].username &&
        this.senha == usuarios[i].password
      ) {
        this.router.navigate(['/home']);
        this.authService.setPermissao(true);
        return;
      }
    }
    alert("Usuário ou senha incorretos.");
  }
}
