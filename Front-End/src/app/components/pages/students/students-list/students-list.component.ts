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
    // Verify if the teacher is authenticated
    this.authService.isAuthenticated().subscribe({
      next: (response) => {
        if (response.authenticated) {
          this.fetchTeacherData();
        } else {
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Error in authentication. Try again.';
        console.error('Error in authentication verify:', error);
      }
    });
  }

  // Method to search the teacher data
  fetchTeacherData(): void {
    const teacherName = localStorage.getItem('teacherName'); // Gets the teacher name
    if (teacherName) {
      this.authService.getTeacherData(teacherName).subscribe({
        next: (data: TeacherResponseDTO) => {
          console.log('Teacher data:', data); // Log for depuration
          this.teacherData = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error in teacher data search:', error); // Log for depuration
          this.isLoading = false;
          this.errorMessage = 'Error to load teacher data. Try again.';
        }
      });
    } else {
      this.errorMessage = 'Name of the teacher not found.';
      this.isLoading = false;
    }

    alert("Login maked with sucess!");
  }
}
