import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  listaOrdenes: any[] = [];
  filteredOrdenes: any[] = [];
  ordenesCargadas: boolean = false;
  searchTerm: string = '';

  constructor(
    private router: Router, 
    private ordenService: OrdenTrabajoService
  ) {}

  ngOnInit(): void {
    this.fetchOrdenes();
  }

  async fetchOrdenes() {
    try {
      const data = await this.ordenService.listaOrdenTrabajo();
      this.listaOrdenes = data;
      this.filteredOrdenes = data;
      this.ordenesCargadas = true;
    } catch (error) {
      console.error('Error al buscar las órdenes de trabajo:', error);
    }
  }

  onSearch() {
    this.filteredOrdenes = this.listaOrdenes.filter(orden => {
      return this.searchTerm
        ? orden.activo.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
          orden.sector?.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
    });
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }
}
