import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverResultadosolicitudComponent } from './remover-resultadosolicitud.component';

describe('RemoverResultadosolicitudComponent', () => {
  let component: RemoverResultadosolicitudComponent;
  let fixture: ComponentFixture<RemoverResultadosolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverResultadosolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverResultadosolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
