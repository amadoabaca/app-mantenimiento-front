import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-operario',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-operario.component.html',
  styleUrl: './dashboard-operario.component.css'
})
export class DashboardOperarioComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login-form']);
  }

  navigateToOT() {
    this.router.navigate(['/orden-trabajo']);
  }

  navigateToSolicitud() {
    this.router.navigate(['/orden-trabajo-form']);
  }
}
