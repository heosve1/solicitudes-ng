import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverTiposolicitudComponent } from './remover-tiposolicitud.component';

describe('RemoverTiposolicitudComponent', () => {
  let component: RemoverTiposolicitudComponent;
  let fixture: ComponentFixture<RemoverTiposolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverTiposolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverTiposolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
