import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionEvaluacionsolicitudComponent } from './edicion-evaluacionsolicitud.component';

describe('EdicionEvaluacionsolicitudComponent', () => {
  let component: EdicionEvaluacionsolicitudComponent;
  let fixture: ComponentFixture<EdicionEvaluacionsolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionEvaluacionsolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionEvaluacionsolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
