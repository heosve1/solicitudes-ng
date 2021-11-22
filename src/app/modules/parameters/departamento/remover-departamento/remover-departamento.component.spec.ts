import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverDepartamentoComponent } from './remover-departamento.component';

describe('RemoverDepartamentoComponent', () => {
  let component: RemoverDepartamentoComponent;
  let fixture: ComponentFixture<RemoverDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
