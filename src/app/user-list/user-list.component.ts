import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  usuarios: { id:string, username: string; name: string; email: string }[] = [];
  constructor(private authService: AuthService) {
    this.usuarios = this.authService.getUsuarios();
  }
}
