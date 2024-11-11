import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenTrabajoDetalleComponent } from './orden-trabajo.component';

describe('OrdenTrabajoComponent', () => {
  let component: OrdenTrabajoDetalleComponent;
  let fixture: ComponentFixture<OrdenTrabajoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenTrabajoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenTrabajoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
