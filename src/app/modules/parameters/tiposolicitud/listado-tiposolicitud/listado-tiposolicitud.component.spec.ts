import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTiposolicitudComponent } from './listado-tiposolicitud.component';

describe('ListadoTiposolicitudComponent', () => {
  let component: ListadoTiposolicitudComponent;
  let fixture: ComponentFixture<ListadoTiposolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTiposolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoTiposolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
