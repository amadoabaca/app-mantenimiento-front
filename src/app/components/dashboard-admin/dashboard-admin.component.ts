import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/anterior-componente']); // Cambia la ruta al componente anterior
  }

  navigateToOT() {
    this.router.navigate(['/orden-trabajo']);
  }
}
