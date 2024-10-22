import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-trabajo-form',
  standalone: true,
  imports: [],
  templateUrl: './orden-trabajo-form.component.html',
  styleUrl: './orden-trabajo-form.component.css'
})
export class OrdenTrabajoFormComponent {
  constructor(private router: Router) {}
  goBack() {
    this.router.navigate(['/dashboard-admin']); // Cambia la ruta al componente anterior
  }
}
