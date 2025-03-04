import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeacherResponseDTO } from '../dto/teacher-response.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/teachers'; // URL da API

  constructor(private http: HttpClient) { }

  // Método para fazer login (envia dados como application/x-www-form-urlencoded)
  login(credentials: { name: string, password: string }): Observable<TeacherResponseDTO> {
    const body = new HttpParams()
      .set('name', credentials.name)
      .set('password', credentials.password);

    return this.http.post<TeacherResponseDTO>(`${this.apiUrl}/login`, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  // Método para verificar se o usuário está autenticado (envia dados como application/x-www-form-urlencoded)
  isAuthenticated(): Observable<{ authenticated: boolean }> {
    const token = localStorage.getItem('authToken'); // Exemplo de como obter o token
    const body = new HttpParams().set('token', token || '');

    return this.http.post<{ authenticated: boolean }>(`${this.apiUrl}/check-auth`, body.toString(), {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  getTeacherData(name: string): Observable<TeacherResponseDTO> {
    const params = new HttpParams().set('name', name);
    return this.http.get<TeacherResponseDTO>(`${this.apiUrl}/teacher-data`, { params });
  }
}
