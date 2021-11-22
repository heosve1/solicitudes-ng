import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionResultadosolicitudComponent } from './creacion-resultadosolicitud.component';

describe('CreacionResultadosolicitudComponent', () => {
  let component: CreacionResultadosolicitudComponent;
  let fixture: ComponentFixture<CreacionResultadosolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionResultadosolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionResultadosolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
