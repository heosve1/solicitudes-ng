import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverEvaluacionsolicitudComponent } from './remover-evaluacionsolicitud.component';

describe('RemoverEvaluacionsolicitudComponent', () => {
  let component: RemoverEvaluacionsolicitudComponent;
  let fixture: ComponentFixture<RemoverEvaluacionsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverEvaluacionsolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverEvaluacionsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
