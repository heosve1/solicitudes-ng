import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionTiposolicitudComponent } from './edicion-tiposolicitud.component';

describe('EdicionTiposolicitudComponent', () => {
  let component: EdicionTiposolicitudComponent;
  let fixture: ComponentFixture<EdicionTiposolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionTiposolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionTiposolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
