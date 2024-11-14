import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', 
})
export class AuthService {
  private permissao: boolean = false;
  private usuarios: { username: string; password: string; name: string; email: string; id: string }[] = [
    { username: 'joao', password: '123', name: 'João Pedro', email: 'joao@gmail.com', id: '1' },
    { username: 'felipe', password: '1234', name: 'Felipe', email: 'felipe@gmail.com', id: '2' },
  ];

  setPermissao(value: boolean) {
    this.permissao = value;
  }

  getPermissao(): boolean {
    return this.permissao;
  }
  getUsuarios() {
    return this.usuarios;
  }
}
