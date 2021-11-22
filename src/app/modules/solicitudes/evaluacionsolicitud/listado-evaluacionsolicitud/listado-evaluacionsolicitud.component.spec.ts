import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEvaluacionsolicitudComponent } from './listado-evaluacionsolicitud.component';

describe('ListadoEvaluacionsolicitudComponent', () => {
  let component: ListadoEvaluacionsolicitudComponent;
  let fixture: ComponentFixture<ListadoEvaluacionsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEvaluacionsolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEvaluacionsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
