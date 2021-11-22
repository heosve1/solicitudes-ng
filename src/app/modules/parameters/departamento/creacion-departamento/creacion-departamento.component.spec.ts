import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDepartamentoComponent } from './creacion-departamento.component';

describe('CreacionDepartamentoComponent', () => {
  let component: CreacionDepartamentoComponent;
  let fixture: ComponentFixture<CreacionDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
