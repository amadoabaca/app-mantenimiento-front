import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  listaOrdenes: OrdenTrabajo[] = [];
  ordenesFiltradas: OrdenTrabajo[] = []; 
  ordenesCargadas: boolean = false;
  busqueda: string = ''; 

  constructor(
    private router: Router, 
    private ordenService: OrdenTrabajoService
  ) {}

  ngOnInit(): void{
    this.obtenerOrdenes();
  }

  async obtenerOrdenes() {
    try {
      const data = await this.ordenService.listaOrdenTrabajo();
      this.listaOrdenes = data;
      this.ordenesFiltradas = data;
      this.ordenesCargadas = true;
    } catch (error) {
      console.error('Error al buscar las ordenes de trabajo: ', error);
    }
  }

  onSearch() {
    this.ordenesFiltradas = this.listaOrdenes.filter(orden => {
      return this.busqueda
        ? orden.activo.toLowerCase().includes(this.busqueda.toLowerCase()) || 
          orden.sector?.toLowerCase().includes(this.busqueda.toLowerCase())
        : true;
    });
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }
}
