import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverSolicitudComponent } from './remover-solicitud.component';

describe('RemoverSolicitudComponent', () => {
  let component: RemoverSolicitudComponent;
  let fixture: ComponentFixture<RemoverSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
