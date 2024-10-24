import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivoService } from '../../services/activo.service';
import { UserService } from '../../services/user.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { TareaService } from '../../services/tarea.service';
import { SectorService } from '../../services/sector.service';
import { PisoService } from '../../services/piso.service';
import { EdificioService } from '../../services/edificio.service';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-orden-trabajo-form',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './orden-trabajo-form.component.html',
  styleUrls: ['./orden-trabajo-form.component.css']
})
export class OrdenTrabajoFormComponent implements OnInit {
  ordenTrabajo: OrdenTrabajo = {
    operario: '',
    edificio: '',
    piso: '',
    sector: '',
    ubicacion: '',
    activo: '',
    instrucciones: ''
  };

  operarios: any[] = [];
  edificios: any[] = [];
  pisos: any[] = [];
  sectores: any[] = [];
  ubicaciones: any[] = [];
  activos: any[] = [];

  constructor(
    private router: Router,
    private activoService: ActivoService,
    private userService: UserService,
    private ubicacionService: UbicacionService,
    private tareaService: TareaService,
    private sectorService: SectorService,
    private pisoService: PisoService,
    private edificioService: EdificioService,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  ngOnInit(): void {
    try {
      this.obtenerOperarios();
      this.obtenerEdificios();
      this.obtenerPisos();
      this.obtenerSectores();
      this.obtenerUbicaciones();
      this.obtenerActivos();
    } catch (error) {
      console.error('Error en ngOnInit:', error);
    }
  }
// Funcion para volver al componente dashboard
  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }

  obtenerOperarios() {
    this.userService.obtenerOperarios().pipe(
      catchError(error => {
        console.error('Error al obtener operarios:', error);
        return of([]); 
      })
    ).subscribe(data => {
      this.operarios = data;
    });
  }

  obtenerEdificios() {
    this.edificioService.obtenerEdificios().pipe(
      catchError(error => {
        console.error('Error al obtener edificios:', error);
        return of([]);
      })
    ).subscribe(data => {
      this.edificios = data;
    });
  }

  obtenerPisos() {
    this.pisoService.obtenerPisos().pipe(
      catchError(error => {
        console.error('Error al obtener pisos:', error);
        return of([]);
      })
    ).subscribe(data => {
      this.pisos = data;
    });
  }

  obtenerSectores() {
    this.sectorService.obtenerSectores().pipe(
      catchError(error => {
        console.error('Error al obtener sectores:', error);
        return of([]); 
      })
    ).subscribe(data => {
      this.sectores = data;
    });
  }

  obtenerUbicaciones() {
    this.ubicacionService.obtenerUbicaciones().pipe(
      catchError(error => {
        console.error('Error al obtener ubicaciones:', error);
        return of([]); 
      })
    ).subscribe(data => {
      this.ubicaciones = data;
    });
  }

  obtenerActivos() {
    this.activoService.obtenerActivos().pipe(
      catchError(error => {
        console.error('Error al obtener activos:', error);
        return of([]); 
      })
    ).subscribe(data => {
      this.activos = data;
    });
  }

  // Enviar la solicitud al back 
  enviarSolicitud() {
    try {
      this.ordenTrabajoService.crearOrdenTrabajo(this.ordenTrabajo).subscribe(response => {
        console.log('Orden de trabajo creada:', response);
        this.router.navigate(['/dashboard-admin']);
      }, error => {
        console.error('Error al crear la orden de trabajo:', error);
      });
    } catch (error) {
      console.error('Error inesperado al enviar la solicitud:', error);
    }
  }
  //Funciones para capturar los datos seleccionados en los select y actualiza ordenTrabajo

  onOperarioChange(event: any) {
    this.ordenTrabajo.operario = String(event.target.value);
  }

  onEdificioChange(event: any) {
    this.ordenTrabajo.edificio = String(event.target.value);
  }

  onPisoChange(event: any) {
    this.ordenTrabajo.piso = String(event.target.value);
  }

  onSectorChange(event: any) {
    this.ordenTrabajo.sector = String(event.target.value);
  }

  onUbicacionChange(event: any) {
    this.ordenTrabajo.ubicacion = String(event.target.value);
  }

  onActivoChange(event: any) {
    this.ordenTrabajo.activo = String(event.target.value);
  }
}

