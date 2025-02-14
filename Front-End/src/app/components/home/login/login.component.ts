import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // Injete o AuthService no construtor
  constructor(private authService: AuthService) {}

  // Exemplo de método para fazer login
  onLogin(username: string, password: string) {
    this.authService.login({ username, password }).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido!', response);
        // Lógica para redirecionar ou atualizar a interface
      },
      error: (error) => {
        console.error('Erro no login:', error);
        // Lógica para tratar erros
      }
    });
  }

}
