import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'; // Importe o AuthService
import { Router } from '@angular/router'; // Importe o Router para redirecionamento

interface Teacher {
  name: string;
  school: string;
  city: string;
  classes: {
    className: string;
    students: string[];
  }[];
}

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  teacherData: Teacher | null = null; // Dados do professor
  isLoading: boolean = true; // Estado de carregamento
  errorMessage: string | null = null; // Mensagem de erro

  // Injete o AuthService e o Router no construtor
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Verifica se o professor está autenticado
    this.authService.isAuthenticated().subscribe({
      next: (response) => {
        if (response.authenticated) {
          // Se autenticado, busca os dados do professor
          this.fetchTeacherData();
        } else {
          // Se não autenticado, redireciona para a página de login
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao verificar autenticação. Tente novamente.';
        console.error('Erro ao verificar autenticação:', error);
      }
    });
  }

  // Método para buscar os dados do professor
  fetchTeacherData(): void {
    this.authService.getTeacherData().subscribe({
      next: (data: Teacher) => {
        this.teacherData = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Erro ao carregar dados do professor. Tente novamente.';
        console.error('Erro ao buscar dados do professor:', error);
      }
    });
  }
}
