import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionEvaluacionsolicitudComponent } from './creacion-evaluacionsolicitud.component';

describe('CreacionEvaluacionsolicitudComponent', () => {
  let component: CreacionEvaluacionsolicitudComponent;
  let fixture: ComponentFixture<CreacionEvaluacionsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionEvaluacionsolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionEvaluacionsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
