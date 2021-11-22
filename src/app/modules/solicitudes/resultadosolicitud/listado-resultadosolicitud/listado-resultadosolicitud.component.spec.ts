import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoResultadosolicitudComponent } from './listado-resultadosolicitud.component';

describe('ListadoResultadosolicitudComponent', () => {
  let component: ListadoResultadosolicitudComponent;
  let fixture: ComponentFixture<ListadoResultadosolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoResultadosolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoResultadosolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
