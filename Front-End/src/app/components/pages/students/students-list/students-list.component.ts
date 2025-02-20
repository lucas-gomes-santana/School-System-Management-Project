import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeacherResponseDTO } from '../../../../dto/teacher-response.dto';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  imports: [CommonModule],
})
export class StudentsListComponent implements OnInit {
  teacherData: TeacherResponseDTO | null = null; // Use TeacherResponseDTO
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
<<<<<<< HEAD
    // Verifica se o professor está autenticado
    this.authService.isAuthenticated().subscribe({
      next: (response) => {
        if (response.authenticated) {
          // Se autenticado, busca os dados do professor
          this.fetchTeacherData();
        } else {
          // Se não autenticado, redireciona para a página de login
=======
    // Verify if the teacher is authenticated
    this.authService.isAuthenticated().subscribe({
      next: (response) => {
        if (response.authenticated) {
          this.fetchTeacherData();
        } else {
>>>>>>> Test-Branch
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        this.isLoading = false;
<<<<<<< HEAD
        this.errorMessage = 'Erro ao verificar autenticação. Tente novamente.';
        console.error('Erro ao verificar autenticação:', error);
=======
        this.errorMessage = 'Error in authentication. Try again.';
        console.error('Error in authentication verify:', error);
>>>>>>> Test-Branch
      }
    });
  }

<<<<<<< HEAD
  // Método para buscar os dados do professor
  fetchTeacherData(): void {
    const teacherName = localStorage.getItem('teacherName'); // Obtém o nome do professor do localStorage
    if (teacherName) {
      this.authService.getTeacherData(teacherName).subscribe({
        next: (data: TeacherResponseDTO) => {
          console.log('Dados do professor:', data); // Log para depuração
=======
  // Method to search the teacher data
  fetchTeacherData(): void {
    const teacherName = localStorage.getItem('teacherName'); // Gets the teacher name
    if (teacherName) {
      this.authService.getTeacherData(teacherName).subscribe({
        next: (data: TeacherResponseDTO) => {
          console.log('Teacher data:', data); // Log for depuration
>>>>>>> Test-Branch
          this.teacherData = data;
          this.isLoading = false;
        },
        error: (error) => {
<<<<<<< HEAD
          console.error('Erro ao buscar dados do professor:', error); // Log para depuração
          this.isLoading = false;
          this.errorMessage = 'Erro ao carregar dados do professor. Tente novamente.';
        }
      });
    } else {
      this.errorMessage = 'Nome do professor não encontrado.';
=======
          console.error('Error in teacher data search:', error); // Log for depuration
          this.isLoading = false;
          this.errorMessage = 'Error to load teacher data. Try again.';
        }
      });
    } else {
      this.errorMessage = 'Name of the teacher not found.';
>>>>>>> Test-Branch
      this.isLoading = false;
    }
  }
}
