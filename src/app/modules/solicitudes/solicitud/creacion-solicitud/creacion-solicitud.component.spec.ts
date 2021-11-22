import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionSolicitudComponent } from './creacion-solicitud.component';

describe('CreacionSolicitudComponent', () => {
  let component: CreacionSolicitudComponent;
  let fixture: ComponentFixture<CreacionSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
