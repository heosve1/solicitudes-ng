import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDepartamentoComponent } from './edicion-departamento.component';

describe('EdicionDepartamentoComponent', () => {
  let component: EdicionDepartamentoComponent;
  let fixture: ComponentFixture<EdicionDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
