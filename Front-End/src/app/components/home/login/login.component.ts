import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { TeacherResponseDTO } from '../../../dto/teacher-response.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {

  name: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  // Login method
  onLogin(): void {
    this.errorMessage = null;

    this.authService.login({ name: this.name, password: this.password }).subscribe({
      next: (response: TeacherResponseDTO) => {
        // Verify if the response contains the name of the teacher
        if (response && response.teacherName) {
          console.log('Teacher data after login:', response); // Log for depuration
          localStorage.setItem('teacherName', response.teacherName); // Storage teacher name
          this.router.navigate(['/students-list']); // Redireciona para a página de lista de alunos
        } else {
          this.errorMessage = 'Name or password incorrect.Try again';
        }
      },
      error: (error) => {
        console.error('Login error:', error); // Log for depuration
        if (error.status === 0) {
          this.errorMessage = 'Server connection error.';
        } else if (error.status === 401) {
          this.errorMessage = 'Name or password incorrect.Insert the correct dates';
        } else {
          this.errorMessage = 'Error on login attempt. Try again later.';
        }
      }
    });
  }
}
