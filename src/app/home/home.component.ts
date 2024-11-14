import { Component } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  permissao:boolean;

  constructor(private authService: AuthService, private router:Router){
    this.permissao = this.authService.getPermissao();
    if (!this.permissao) {
      alert("Acesso negado. Por favor faça o login.");
      this.router.navigate(['/login']); 
    }
  }
}
