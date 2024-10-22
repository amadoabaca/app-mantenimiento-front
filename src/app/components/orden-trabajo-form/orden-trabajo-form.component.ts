import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivoService } from '../../services/activo.service';
import { UserService } from '../../services/user.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { TareaService } from '../../services/tarea.service';
import { SectorService } from '../../services/sector.service';
import { PisoService } from '../../services/piso.service';
import { EdificioService } from '../../services/edificio.service';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';

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
    this.router.navigate(['/dashboard-admin']); 
  }
}
