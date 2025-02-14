import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Teacher {
  name: string;
  school: string;
  city: string;
  classes: {
    className: string;
    students: string[];
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/teachers/login'; // URL of the API

  constructor(private http: HttpClient) { }

  // Login method
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Method to register a user
  register(userData: { username: string, password: string, email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Method to verify if the user is authenticated
  isAuthenticated(): Observable<any> {
    return this.http.get(`${this.apiUrl}/check-auth`);
  }

   // Método para buscar os dados do professor
   getTeacherData(): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.apiUrl}/teacher-data`);
  }
}
