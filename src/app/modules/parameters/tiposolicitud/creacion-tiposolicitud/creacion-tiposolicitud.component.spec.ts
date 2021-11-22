import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTiposolicitudComponent } from './creacion-tiposolicitud.component';

describe('CreacionTiposolicitudComponent', () => {
  let component: CreacionTiposolicitudComponent;
  let fixture: ComponentFixture<CreacionTiposolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionTiposolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionTiposolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
