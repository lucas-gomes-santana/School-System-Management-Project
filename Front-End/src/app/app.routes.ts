import { Routes } from '@angular/router';
import { LoginComponent } from './components/home/login/login.component';
import { StudentsListComponent } from './components/pages/students/students-list/students-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Rota padrão
  { path: 'login', component: LoginComponent }, // Rota do LoginComponent
  { path: 'students-list', component: StudentsListComponent }, // Rota do StudentsListComponent
];
