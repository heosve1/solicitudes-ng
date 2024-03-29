import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionSolicitudComponent } from './edicion-solicitud.component';

describe('EdicionSolicitudComponent', () => {
  let component: EdicionSolicitudComponent;
  let fixture: ComponentFixture<EdicionSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
