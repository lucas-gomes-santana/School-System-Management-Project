import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  teacher: any;

  constructor(private router: Router) {
    this.teacher = this.router.getCurrentNavigation()?.extras.state?.['teacher'];
  }
}
