import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionResultadosolicitudComponent } from './edicion-resultadosolicitud.component';

describe('EdicionResultadosolicitudComponent', () => {
  let component: EdicionResultadosolicitudComponent;
  let fixture: ComponentFixture<EdicionResultadosolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionResultadosolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionResultadosolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
