import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-trabajo',
  standalone: true,
  imports: [],
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/anterior-componente']); // Cambia la ruta al componente anterior
  }
}
